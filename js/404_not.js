var a = false;
        function fn() {
            if (a) {
                document.getElementById('B').style.display = "none";
                a = false;
            }
            else {
                document.getElementById('B').style.display = "block";
                a = true;
            }
        }
        var a2 = false;
        function fn2() {
            if (a2) {
                document.getElementById('B2').style.display = "none";
                a2 = false;
            }
            else {
                document.getElementById('B2').style.display = "block";
                a2 = true;
            }
        }