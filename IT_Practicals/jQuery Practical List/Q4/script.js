// // JavaScript events
// document.getElementById('blurInput').addEventListener('blur', function () {
//     console.log('Blur event');
// });

// document.getElementById('changeInput').addEventListener('change', function () {
//     console.log('Change event');
// });

// document.getElementById('focusInput').addEventListener('focus', function () {
//     console.log('Focus event');
// });

// document.getElementById('selectBox').addEventListener('change', function () {
//     console.log('Select event. Selected value: ' + this.value);
// });

// document.getElementById('clickBtn').addEventListener('click', function () {
//     console.log('Click event');
// });

// document.getElementById('dblClickDiv').addEventListener('dblclick', function () {
//     console.log('Double click event');
// });

// document.getElementById('submitForm').addEventListener('submit', function (event) {
//     event.preventDefault(); // Prevent the default form submission
//     console.log('Form submitted');
// });

// jQuery events
$(document).ready(function () {
    $('#blurInput').on('blur', function () {
        console.log('Blur event (jQuery)');
    });

    $('#changeInput').on('change', function () {
        console.log('Change event (jQuery)');
    });

    $('#focusInput').on('focus', function () {
        console.log('Focus event (jQuery)');
    });

    $('#selectBox').on('change', function () {
        console.log('Select event (jQuery). Selected value: ' + $(this).val());
    });

    $('#clickBtn').on('click', function () {
        console.log('Click event (jQuery)');
    });

    $('#dblClickDiv').on('dblclick', function () {
        console.log('Double click event (jQuery)');
    });

    $('#submitForm').on('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission
        console.log('Form submitted (jQuery)');
    });
});
