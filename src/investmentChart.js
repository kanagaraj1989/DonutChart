
	var dataSet = [
        {
            label: "Equity",
            data: 2138.28,
            color: "#005CDE"
        }, 
        {
            label: "Bond",
            data: 843.87,
            color: "#00A36A"
        }, 
        {
            label: "Others",
            data: 319.61,
            color: "#7D0096"
        },
        {
            label: "Cash",
            data: 3201.76,
            color: "#992B00"
        }
    ];

    var options2 = {
        series: {
            pie: {
                show: true,
                innerRadius: 0.7,
                radius: 0.95,
            }
        },
        legend:{
            show: true,
            labelFormatter: function(label, series) {
                var percent= Math.round(series.percent);
                var number= series.data[0][1]; //kinda weird, but this is what it takes
                return('<span style="color:white;">&nbsp;<b>'+label+'</b>:&nbsp;'+ percent + '%</span>');
            },
            position:"se",
            backgroundColor: '#191970',
            color: '#ffffff',
        }
    };

    $(document).ready(function() {
        $.plot($("#flot-placeholder"), dataSet, options2);
    });
    
