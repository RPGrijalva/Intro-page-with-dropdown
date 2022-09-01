const menu = document.querySelector('#menu');
const nav = document.querySelector('nav');
const overlay = document.querySelector('#background-hider');
const featuresChk = document.querySelector('#features-check');
const featuresItm = document.querySelectorAll('.features-item');
const featuresIcn = document.querySelector('#features-icon');
const companyChk = document.querySelector('#company-check');
const companyItm = document.querySelectorAll('.company-item');
const companyIcn = document.querySelector('#company-icon');

menu.addEventListener('change', function() {
    if (menu.checked) {
        nav.style.right = '0px';
        overlay.style.display = 'block';
    }
    else {
        nav.style.right = '-250px';
        overlay.style.display = 'none';
    }
});

featuresChk.addEventListener('change', function() {
    if (featuresChk.checked) {
        featuresIcn.src = featuresIcn.src.replace("images/icon-arrow-down.svg","images/icon-arrow-up.svg");
        for (item in featuresItm) {
            featuresItm[item].style.display = 'block';
        };
    }
    else {
        featuresIcn.src = featuresIcn.src.replace("images/icon-arrow-up.svg","images/icon-arrow-down.svg");
        for (item in featuresItm) {
            featuresItm[item].style.display = 'none';
        };
    }
});

companyChk.addEventListener('change', function() {
    if (companyChk.checked) {
        companyIcn.src = companyIcn.src.replace("images/icon-arrow-down.svg","images/icon-arrow-up.svg");
        for (item in companyItm) {
            companyItm[item].style.display = 'block';
        };
    }
    else {
        for (item in companyItm) {
        companyIcn.src = companyIcn.src.replace("images/icon-arrow-up.svg","images/icon-arrow-down.svg");
            companyItm[item].style.display = 'none';
        };
    }
});