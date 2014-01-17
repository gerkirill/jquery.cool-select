function CoolSelect(val_name) {

    if (typeof(val_name) == "string") {
        val_name = $(val_name);
        console.log(val_name);
    } else if (val_name instanceof jQuery) {
        console.log("It's jQuery object :]");
    } else if (!(val_name instanceof jQuery)) {
        throw new Error("Wrong type of input!");
    }

    val_name.each(function() {
        var select_val = $(this);
        select_val.hide();        
        
        /* Start of code generation */

        var select_div = $("<div class='select_div'></div>");
        var span_value = $("<span class='list_val'></span>");
        var select_div_div = $("<div class='div_list'></div>");
        var select_ul = $("<ul class='list_style'></ul>");

        select_div.insertAfter(select_val);
        span_value.appendTo(select_div);
        select_div_div.appendTo(select_div);
        select_ul.appendTo(select_div_div);

        select_val.find("option").each(function() {
            var option_var = $(this);
            var opt_val = option_var.val();
            var li = $("<li></li>");
            li.text(option_var.text()).appendTo(select_ul);
            li.data("value", opt_val);

            if (option_var.is(':selected')) {
                span_value.text(option_var.text());
                li.addClass("selected_li");
            }
            li.on("click", function(event) {
                var li_target = $(event.target);
                li_target.siblings().removeClass("selected_li");
                li_target.addClass("selected_li");

                select_val.val(li_target.data("value"));
                
                select_val.triggerHandler("change");

            });

            /* End of code generation */

        });

        span_value.on("click", function(event) {
            if (select_div_div.is(':hidden')) {
                select_div_div.fadeIn(300);
            } else {
                select_div_div.fadeOut(300);
            };
        });

        select_ul.on("click", function(event) {
            select_div_div.fadeOut(300);
            var target = event.target || event.srcElement;
            span_value.html(target.innerHTML);
        });
    });
};