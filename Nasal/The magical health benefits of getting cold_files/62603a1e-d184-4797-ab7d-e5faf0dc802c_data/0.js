$(document).ready(function() {
    var dates = $("#card div[data-type='date'] dl dd");
    var tables=  $("#card div[data-type='table'] table");

    function getAge(dateString) {
        var today = new Date();
        var birthDate = new Date(dateString);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    function formatNumber(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    $.each(dates, function(i,v){
        var date = $(v).text();
        $(this).append(" (age " + getAge(date) + ")");
    });

    tables.each(function() {
        var widget = $(this);

        widget.find('td, th').each(function(){
            var re = /\((https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})\)/g;
            var str = $(this).text();
            var text;
            var m;

            while ((m = re.exec(str)) !== null) {
                if (m.index === re.lastIndex) {
                    re.lastIndex++;
                }

                text = m.input;
                text = str.replace(str, text.replace(m[0], ''));

                $(this).html("<a href='" + m[1] + "' target='_blank'>" + text + "</a>");
            }
        });
    });

    $('#card .row[data-type="table"][data-theme="election"] tbody').each(function() {

        //get the rows of the election table and then get the labels in the table head
        var rows = $(this).find('tr');
        var rowHeaders = $('#card .row[data-type="table"][data-theme="election"] thead').find('th');
        var classArr = [];
        var blankcells = 0;

        for(a=0,b=rowHeaders.length;a<b;a++){
            if( $(rowHeaders[a]).text() != '' ){
                classArr.push('elecTable-' + $(rowHeaders[a]).text().toLowerCase().replace(/\s/g, ''));
            }else{
                blankcells += 1;
            }
        }

        for(a=0,b=rows.length;a<b;a++){

            var rowCells = $(rows[a]).find('td');

            if(a % 2){

                for(c=1,d=rowCells.length;c<d;c++){
                    var delimiter = $(rowCells[c]).text()[0];

                    if(delimiter != '+' && delimiter != '-'){

                    }else{
                        var symbol = '';
                        if(delimiter == '+'){
                            symbol = '&#9650;'
                        }else{
                            symbol = '&#9660;'
                        }
                        $(rowCells[c]).html( symbol + delimiter + formatNumber($(rowCells[c]).text().substring(1)) );
                    }

                }

            }else{

                for(c=1,d=rowCells.length;c<d;c++){
                    $(rowCells[c]).addClass(classArr[c-blankcells]);
                    $(rowCells[c]).text(formatNumber($(rowCells[c]).text()));
                }

            }

        }

    });

    $('section[data-type="graph"]').each(function() {
        var widget = $(this);
        var nums = []; // numerical data
        var numsLargest = 0; // largest positive
        var numsLargestNeg = 0; // largest negative
        var range = 0; //the combined range of positive + negative
        var largestNegPerc = 0;
        var modifier = "left"; //($(this).data('type') == 'graph') ? 'left' : 'bottom';

        // grab data
        widget.find('dd').each(function(i) {
            // get number
            var f = parseFloat($(this).text().replace(/[^0-9.-]/g, ''));

            // if is negative, push to negative storage
            if (f < numsLargestNeg) numsLargestNeg = f;

            // store number and find largest positive
            nums.push(f);
            if (f > numsLargest) {
                numsLargest = f;
            }
        });

        // if there are negative numbers, add the largest to the positive to make the combined range
        // then scale the graph so height remains the same
        if (numsLargestNeg < 0) {
            range = numsLargest + Math.abs(numsLargestNeg);
            largestNegPerc = 100*Math.abs(numsLargestNeg/range);
            $(this).find('dl[data-el="content"]').addClass('negative');
            if (modifier == "left") $(this).find('dl[data-el="content"] dd.ruler').css({ 'left' : largestNegPerc + "%" });
            else $(this).find('dl[data-el="content"] dd.ruler').css({ 'bottom' : largestNegPerc + "%" });
        } else range = numsLargest;

        // if there are no positive numbers give it a margin top
        if (numsLargest == 0) $(this).find('dl[data-el="content"]').addClass('no-positives');

        // style bars
        widget.find('dd').not('.ruler').each(function(i) {
            // add backgrounds
            $(this).html('<span>' + $(this).html() + '</span>');
            var extra = $(this).attr('data-widget-extra-1');
            if (extra == '*') {
                $(this).addClass('backgroundHighlight border');
            }
            if ((extra !== undefined) && (extra.search(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i) !== -1)) {
                $(this).css('background-color', extra);
            }

            // find percentage according to combined range
            var p = 100 * Math.abs(nums[i]) / range;

            if (modifier == "left") {
                // if positive but with negative(s) present, move it from default position
                if (nums[i] >= 0 && numsLargestNeg < 0) {
                    $(this).css({ 'margin-left' : largestNegPerc + "%"});
                    if (numsLargest > 0) $(this).prev().css({ 'margin-left' : largestNegPerc + "%", 'padding-left' : '0.35rem' });
                }
                // if negative add class to style as needed
                if (nums[i] < 0) $(this).addClass('negative');
                // if negative but not the largest negative, put in right place
                if (nums[i] < 0 && p != largestNegPerc) $(this).css({ 'margin-left' : (largestNegPerc - p) + "%"});
                // for all negative only graphs, or for graphs where the largest negative is more than 50% move the labels
                if (numsLargest == 0  || (largestNegPerc > 50 && numsLargest > 0)){
                    if (nums[i] < 0 || (nums[i] == 0 && numsLargest == 0)) $(this).prev().addClass('right-align');
                    // if largest negative is larger than 50% with positives present, then offset labels and make the width smaller
                    if (largestNegPerc > 50 && numsLargest > 0) {
                        $(this).prev().css({ 'padding-right' : (100 - largestNegPerc + 2) + "%" });
                        $(this).parent().addClass('width80');
                    }
                } else {
                    $(this).prev().css({ 'margin-left' : largestNegPerc + "%", 'padding-left' : '0.35rem' });
                }
            } else {
                // if not negative but with negative(s) present, move it from default position
                if (nums[i] >= 0 && numsLargestNeg < 0) $(this).css({ 'bottom' : largestNegPerc + "%"});
                // if not the largest negative put in right place
                if (nums[i] < 0 && p != largestNegPerc) $(this).css({ 'bottom' : (largestNegPerc - p) + "%"});
                // if largest negative is larger than 50% with positives present, then offset labels and make the width smaller
                if (largestNegPerc > 50 && numsLargest > 0) {
                    $(this).parent().addClass('push-down');
                }
            }

            $(this).css('width', String(p) + '%').css('height', String(p) + '%');
            if (p < 25) {
                if (modifier != "bottom" || numsLargest != 0) $(this).addClass('sectionBarOutside');
            }

            if (p == 0 && numsLargest == 0) $(this).addClass('sectionBarOutside zero');

        });

    });

    $('section[data-type="bar"]').each(function() {
        var widget = $(this);
        var nums = [];
        var numsLargest = 0;

        widget.find('dd').each(function(i) {
            var f = parseFloat($(this).text().replace(/[^0-9.-]/g, ''));
            nums.push(f);
            numsLargest += f;
        });

        widget.find('.legend .item').each(function(i) {
            var extra = $(this).attr('data-widget-extra-1');
            if ((extra !== undefined) && (extra.search(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i) !== -1)) {
                $(this).find('span').css('background-color', extra);
            }
        });

        widget.find('dd').not('.ruler').each(function(i) {
            $(this).html('<span>' + $(this).html() + '</span>');
            var extra = $(this).attr('data-widget-extra-1');
            if (extra == '*') {
                $(this).addClass('backgroundHighlight border');
            }
            if ((extra !== undefined) && (extra.search(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i) !== -1)) {
                $(this).css('background-color', extra);
                $(this).find('span').css('color', extra);
            }

            var p = 100 * Math.abs(nums[i]) / numsLargest;

            $(this).css('width', String(p) + '%').css('height', String(p) + '%');

        });

    });


    
    (function colour(){
        var a = $('#card a'),
            h1 = $('#card h1'),
            h2 = $('#card h2'),
            h3 = $('#card h3'),
            ul = $('#card ul'),
            ol = $('#card ol');

        a.addClass('focus');
        h1.addClass('color');
        h3.addClass('color');
        ul.find('li').addClass('listBackground');
        ol.find('li').addClass('listColor');
    })();

});