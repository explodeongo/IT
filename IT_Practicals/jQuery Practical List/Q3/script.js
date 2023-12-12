// i) Getting and setting content
function getContent() {
    var originalContent = $('#content').html();
    console.log('Original Content:', originalContent);
}

function setContent() {
    $('#content').html('New HTML Content');
    $('#content').text('New Text Content');
}

// ii) Manipulation methods
function manipulateElements() {
    $('#content').before('<div>Before</div>');
    $('#content').after('<div>After</div>');
    $('#content').append('<div>Appended</div>');
    $('#content').prepend('<div>Prepended</div>');

    $('#content').replaceWith('<div>Replaced</div>');
    $('#content').remove();
    $('#content').add('<div>Added</div>');
}

// iii) Attribute methods
function attributeMethods() {
    $('#content').attr('data-info', 'Information');
    $('#content').removeAttr('id');
    $('#content').addClass('highlight');
    $('#content').removeClass('highlight');
}

// iv) Ancestor methods
function ancestorMethods() {
    var parentDiv = $('#content').parent();
    var allParents = $('#content').parents();
    var closestParent = $('#content').closest('body');
}

// v) Descendant methods
function descendantMethods() {
    var findElement = $('#content').find('div');
    var childrenElements = $('#content').children();
}

// vi) Sibling methods
function siblingMethods() {
    var nextElement = $('#content').next();
    var nextAllElements = $('#content').nextAll();
    var prevElement = $('#content').prev();
    var prevAllElements = $('#content').prevAll();
    var nextUntilElements = $('#content').nextUntil('div');
    var prevUntilElements = $('#content').prevUntil('div');
}

// vii) Form values
function formValues() {
    var inputValue = $('input[type="text"]').val();
    console.log('Input Value:', inputValue);

    var isNumeric = $.isNumeric(inputValue);
    console.log('Is Numeric:', isNumeric);
}

// viii) Effects and animation
function effectsAndAnimation() {
    $('#content').hide(1000, function () {
        console.log('Hide Animation Complete');
    });

    $('#content').show(1000, function () {
        console.log('Show Animation Complete');
    });

    $('#content').toggle(1000, function () {
        console.log('Toggle Animation Complete');
    });

    $('#content').delay(1000).fadeOut(1000).fadeIn(1000);

    $('#content').stop(true, true).animate({
        width: '200px',
        height: '200px'
    }, 1000);

    $('#content').fadeOut(1000).fadeIn(1000);
    $('#content').slideToggle(1000);
}