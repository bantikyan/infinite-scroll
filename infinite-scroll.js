// infinite-scroll 1.0.1

var infiniteLoader = { pageNumber: 2, inProgress: false, isLastPage: false };

$(window).scroll(function () {
    if ((Math.abs($(window).scrollTop() - ($(document).height() - window.innerHeight)) <= 3) && !infiniteLoader.isLastPage && !infiniteLoader.inProgress) {

        infiniteLoader.inProgress = true;
        $("#loader").removeClass('hidden');

        $.get(feedsUrl + '?page=' + infiniteLoader.pageNumber + '&feedCategoryGroupId=' + fcGroupId, function (data, status) {
            infiniteLoader.isLastPage = infiniteLoader.pageNumber >= data.PageCount;
            infiniteLoader.pageNumber++;

            //Do work

            $("#loader").addClass('hidden');
            infiniteLoader.inProgress = false;
        });
    }
});