<body>
    <h2> Hello, {{$user["first_name"]}} {{$user["first_name"]}} </h2>
    <div>
        You have received contact request from user ! <br>
        From: {{$user["first_name"]}} {{$user["last_name"]}}<br>
        Request Date: {{$schedule_date}}<br>
        Requested Time: {{$start_time}} ~ {{$end_time}}<br>
    </div>
    <div>
        From support@feriavirtual.com
    </div>
</body>