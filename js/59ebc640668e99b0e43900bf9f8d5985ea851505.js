document.addEventListener("DOMContentLoaded", function() {
    // Memastikan halaman selalu dimuat dari atas tanpa animasi
    window.scrollTo(0, 0);

    // Menambahkan meta tag ke head
    const metaViewport = document.createElement('meta');
    metaViewport.name = "viewport";
    metaViewport.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no";
    document.head.appendChild(metaViewport);

    const tombolCover = document.getElementById("eltemplate-btnCover");

    // Cek apakah elemen tombol-buka ada
    if (tombolCover) {
        disableScrolling();
        document.body.style.overflowY = "hidden";
        document.body.style.height = "100vh"; // Perbaikan typo: heigth -> height

        tombolCover.onclick = function() {
            myFunction();
        };
    }

    const wdpAudio = document.body.contains(document.getElementById('song')) ? document.getElementById('song') : false;
    document.addEventListener("visibilitychange", event => {
        if (document.visibilityState === "visible") {
            wdpAudio && wdpAudio.play();
        } else {
            wdpAudio && wdpAudio.pause();
        }
    });

    // Fungsi untuk menonaktifkan scrolling
    function disableScrolling() {
        var x = window.scrollX;
        var y = window.scrollY;
        window.onscroll = function() {
            window.scrollTo(x, y);
        };
    }

    // Fungsi untuk mengaktifkan scrolling
    function enableScrolling() {
        window.onscroll = function() {};
    }

    // Fungsi untuk memutar audio
    function playAudio() {
        const x = document.getElementById("song");
        if (x) {
            x.play();
        }
    }

    // Fungsi untuk menghentikan audio
    function pauseAudio() {
        const x = document.getElementById("song");
        if (x) {
            x.pause();
        }
    }

    // Fungsi untuk dijalankan saat tombol diklik
    function myFunction() {
        document.body.style.overflowY = "unset";
        tombolCover.style.visibility = "hidden";
        enableScrolling();
        playAudio();
    }

    // jQuery untuk efek fade
    jQuery(function($) {
        $('#eltemplate-btnCover').click(function() {
            $(this).parents('#eltemplate-cover').fadeOut(500);
        });
    });
});

var elbtnAmplop = document.getElementById("eltemplate-btnAmplop");
var elamplop = document.getElementById("eltemplate-amplop");

elbtnAmplop.onclick = function() {
    if (elamplop.style.display === "block") {
        elamplop.style.display = "none";
    } else {
        elamplop.style.display = "block";
    }
};