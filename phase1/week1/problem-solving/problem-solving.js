function problemSolving() {
    const tono = 2;
    const anton = 4;
    const budi = 5;
    const bulan = 31;
    let tanggal = 7;

    while (tanggal <= bulan) {
        let member = [];
        if (tanggal % 5 === 0) {
            console.log("Tanggal " + tanggal + ": Tempat Fitness Tutup");
        } else {
            let rutin = (tanggal - 7);

            if (rutin === 0){
                member.push("Tono", "Anton", "Budi");
            } else {
                if (rutin % tono === 0) {
                    member.push("Tono");
                }
                if (rutin % anton === 0) {
                    member.push("Anton");
                }

                if (rutin % budi === 0) {
                    member.push("Budi");
                }
            }
            console.log("Tanggal " + tanggal + ": " + member);
        }
        tanggal++;
    }
}

problemSolving();


/*
START
DEFINE VARIABLES (
    tono, anton, budi, bulan, tanggal
)

SET 2 TO tono
SET 4 TO anton
SET 5 TO budi
SET 31 TO bulan
SET 7 TO tanggal

FOR LOOP tanggal
    SET member AS EMPTY ARRAY
    IF tanggal MOD BY 5 EQUALS TO 0
        THEN PRINT "Tanggal " + tanggal + ": Tempat Fitness Tutup"
    ELSE
        DEFINE VARIABLE rutin
        SET (tanggal MINUS 7) TO rutin
        IF rutin EQUALS TO 0
            THEN PUSH ("Tono", "Anton", "Budi") TO member
        ELSE
            IF rutin MOD tono EQUALS TO 0
                THEN PUSH "Tono" TO member
            END IF
            IF rutin MOD anton EQUALS TO 0
                THEN PUSH "Anton" TO member
            END IF
            IF rutin MOD budi EQUALS TO 0
                THEN PUSH "Budi" TO member
            END IF
        END IF
        PRINT "Tanggal " + tanggal + ":" + member
    END IF
    tanggal INCREMENT BY 1
UNTIL tanggal EQUALS TO bulan
END
*/
