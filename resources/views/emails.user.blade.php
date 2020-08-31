<body>
    <h2> Hello, {{$user["first_name"]}} {{$user["first_name"]}} </h2>
    <div>
        Your contact request has been sent to Stand's Owner successfully! <br>
        Stand's Owner: {{$owner["first_name"]}} {{$owner["last_name"]}}<br>
        Request Date: {{$schedule_date}}<br>
        Requested Time: {{$start_time}} ~ {{$end_time}}<br>
    </div>
    <div>
        From support@feriavirtual.com
    </div>
</body>