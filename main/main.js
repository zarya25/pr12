'use strict';
document.addEventListener('DOMContentLoaded', function () {
    var accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(function (item) {
        var header = item.querySelector('.accordion-header');
        var content = item.querySelector('.accordion-content');

        header.addEventListener('click', function () {
            item.classList.toggle('active');

            if (item.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                content.style.maxHeight = '0';
            }
        });
    });
});