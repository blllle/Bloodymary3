$(".filters-list a").on("click",function(){var e=$(this).attr("data-filter");return console.log(e),$(".bloody").hide(),$(e).show(),$(".filters-list a").removeClass("filter-selected"),$(this).addClass("filter-selected"),!1});