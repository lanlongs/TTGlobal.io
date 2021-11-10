var a = false;
        function fn() {
            if (a) {
                document.getElementById('ChildMenu').style.display = "none";
                a = false;
            }
            else {
                document.getElementById('ChildMenu').style.display = "block";
                a = true;
            }
        }
        function fn2() {
            // document.getElementById('Z1').innerHTML = 'hahhahah';
            document.getElementById('Z1').innerText = '主页';
            document.getElementById('Z2').innerText = '演示';
            document.getElementById('Z3').innerText = '关于';
            document.getElementById('Z4').innerText = '设置';
            document.getElementById('Z5').innerText = '语言';
            document.getElementById('Z6').innerText = '天色暗了下来，乌云慢慢地笼罩着天空，下起了久违的雨';
        }
        function fn3() {
            document.getElementById('Z1').innerText = 'Home page';
            document.getElementById('Z2').innerText = 'Demo';
            document.getElementById('Z3').innerText = 'About';
            document.getElementById('Z4').innerText = 'Set up';
            document.getElementById('Z5').innerText = 'Language';
            document.getElementById('Z6').innerText = 'The sky darkened, dark clouds slowly covered the sky, and it rained for a long time';
        }
        // function myFunction() {
        //     var w = window.outerWidth;
        //     var h = window.outerHeight;
        //     var txt = "" + w + "" + h;
        //     document.getElementById("dede").innerHTML = txt;
        // }

        if (window.matchMedia('(prefers-color-scheme)').media !== 'not all'){
            console.log('浏览器支持dark模式！');
        }