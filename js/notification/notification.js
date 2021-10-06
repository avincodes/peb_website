var notification_interval;
var notification_closed = true;
var notification_time = 0;
var notification_text = "";
var notification_show_timer = true;

var notification_please_wait = "Please wait...";
var notification_click_to_close = "Click to close";
var notification_timer_1 = "Please wait ";
var notification_timer_2_1 = " second";
var notification_timer_2_2 = " seconds";
var website_please_wait = "Please wait";

var new_style = document.createElement("link");
new_style.rel = "stylesheet";
new_style.type = "text/css";
new_style.href = "https://repository.pe-basics.com/js/notification/notification.css";
document.head.appendChild(new_style);

var new_element = document.createElement("div");
new_element.id = "notification-element";
new_element.addEventListener("click", () => {hide_notification();});
document.body.appendChild(new_element);

function show_notification(text = notification_please_wait, time = 0, show_timer = false, show_please_wait_text = false)
{
    if(text == notification_please_wait)
    {
        show_please_wait_text = false;
    }
    if(notification_closed)
    {
        notification_show_timer = show_timer;
        notification_text = text;
        if(time != 0)
        {
            notification_time = time;
        }
        document.getElementById("notification-element").innerHTML = notification_text + " (" + notification_time + ")";
        document.getElementById("notification-element").style.transform = "translateY(0px)";
        if(notification_time == 0)
        {
            notification_closed = false;
            document.getElementById("notification-element").innerHTML = notification_text;
            if(show_please_wait_text)
            {
                document.getElementById("notification-element").innerHTML += "<br>" + notification_click_to_close;
            }
        }
        else
        {
            document.getElementById("notification-element").innerHTML = notification_text
            if(notification_show_timer)
            {
                document.getElementById("notification-element").innerHTML += "<br>" + notification_timer_1 + notification_time;
                if(notification_time == "1")
                {
                    document.getElementById("notification-element").innerHTML += notification_timer_2_2;
                }
                else
                {
                    document.getElementById("notification-element").innerHTML += notification_timer_2_1;
                }
            }
            notification_closed = false;
            notification_interval = setInterval(notification_countdown, 1000);
        }
    }
    else
    {
        hide_notification();
        setTimeout(() => {
            notification_show_timer = show_timer;
            notification_text = text;
            if(time != 0)
            {
                notification_time = time;
            }
            document.getElementById("notification-element").innerHTML = notification_text + " (" + notification_time + ")";
            document.getElementById("notification-element").style.transform = "translateY(0px)";
            if(notification_time == 0)
            {
                notification_closed = false;
                document.getElementById("notification-element").innerHTML = notification_text;
                if(show_please_wait_text)
                {
                    document.getElementById("notification-element").innerHTML += "<br>" + notification_click_to_close;
                }
            }
            else
            {
                document.getElementById("notification-element").innerHTML = notification_text
                if(notification_show_timer)
                {
                    document.getElementById("notification-element").innerHTML += "<br>" + notification_timer_1 + notification_time;
                    if(notification_time == "1")
                    {
                        document.getElementById("notification-element").innerHTML += notification_timer_2_2;
                    }
                    else
                    {
                        document.getElementById("notification-element").innerHTML += notification_timer_2_1;
                    }
                }
                notification_closed = false;
                notification_interval = setInterval(notification_countdown, 1000);
            }
        }, 600);
    }
}

function notification_countdown()
{
    if(!notification_closed)
    {
        notification_time--;
        document.getElementById("notification-element").innerHTML = notification_text;
        if(notification_show_timer)
        {
            document.getElementById("notification-element").innerHTML += "<br>" + notification_timer_1 + notification_time;
            if(notification_time == "1")
            {
                document.getElementById("notification-element").innerHTML += notification_timer_2_2;
            }
            else
            {
                document.getElementById("notification-element").innerHTML += notification_timer_2_1;
            }
        }
        if(!notification_time)
        {
            hide_notification();
        }
    }
}

function hide_notification()
{
    notification_closed = true;
    notification_time = 0;
    clearInterval(notification_interval);
    document.getElementById("notification-element").style.transform = "translateY(200px)";
}