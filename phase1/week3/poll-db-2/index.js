const db = require('./db');


class Queries {
    static gradeLessThanNine() {
        const sqlQuery = "SELECT * FROM candidates WHERE grade_current < 9";
        db.all(sqlQuery, (err, data) => {
            if (err) {
                console.log(err);
            } else {
                console.log(data);
            }
        })
    }

    static theMostThreeVotes() {
        const sqlQuery = "SELECT votings.vote as total_vote," +
            "candidates.name as politicians_name," +
            "voters.first_name as voter_name," +
            "voters.gender " +
            "FROM votes, " +
            "(SELECT candidate_id, count(voter_id) as vote " +
            "FROM votes " +
            "GROUP BY candidate_id " +
            "order BY vote desc " +
            "LIMIT 3) as votings " +
            "JOIN voters ON voters.id = votes.voter_id " +
            "JOIN candidates ON candidates.id = votes.candidate_id " +
            "WHERE votes.candidate_id = votings.candidate_id " +
            "ORDER by total_vote DESC";


        db.all(sqlQuery, (err, data) => {
            if (err) {
                console.log(err);
            } else {
                console.log(data);
            }
        })
    }

    static theCheaterVoter() {
        const sqlQuery = "SELECT * FROM " +
            "(SELECT voters.first_name AS name," +
            "voters.gender, voters.age," +
            "count(votes.voter_id) as total_vote " +
            "FROM votes JOIN voters ON voters.id = votes.voter_id " +
            "GROUP BY votes.voter_id " +
            "ORDER BY total_vote DESC) " +
            "AS totalVote " +
            "WHERE totalVote.total_vote > 1";

        db.all(sqlQuery, (err, data) => {
            if (err) {
                console.log(err);
            } else {
                console.log(data);
            }
        })
    }
}

Queries.gradeLessThanNine();
Queries.theMostThreeVotes();
Queries.theCheaterVoter();