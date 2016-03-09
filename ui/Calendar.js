//日历
import React from 'react';
const Calendar = React.createClass({
    propTypes:{
        'startDate': React.PropTypes.object,
        'mos': React.PropTypes.number,
        'week': React.PropTypes.array,
        'selected': React.PropTypes.string,
        'holiday': React.PropTypes.object
    },
    getInitialState: function(){
       return {
           'selected': ''
       }
    },
    getDefaultProps: function(){
        return  {
            'startDate': null,//起始日期
            'mos': 2, //要显示的月数,
            'week': ['日', '一', '二', '三', '四', '五', '六'],
           // 'selected': '',
            //节日
            'holiday':{
                '3-8': '妇女节',
                '5-1': '劳动节',
                '10-1': '国过节'
            }
        }
    },
    handleClick: function(date){
        this.setState({
            'selected': date.getFullYear()  + '-' + (date.getMonth() + 1) + '-' + date.getDate()
        });
    },
    render() {
        let {holiday, mos, week} = this.props;
        let {selected} = this.state;
        let startDate = this.props.startDate || new Date();
        let[year, month, date, key, data] = [startDate.getFullYear(), startDate.getMonth(), startDate.getDate(), 0, []];
        for(let i = 0; i < mos; i++){
            month ++;
            if(month > 12){
                month = 1;
                year ++;
            }
            //获取每月的天数(闰年2月29天, 平年2月28天)
            let day = [31, (year % 4 == 0 && year % 100 !=0) || year % 400 == 0 ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
            let allDay = [];
            //判断每个月的周一是礼拜几
            let weekDate = (new Date(year, month - 1, 1)).getDay();
            for(let k = 0; k < weekDate; k++){
                allDay.push(<li key={key++}></li>);
            }
            for(let m = 1; m <= day; m++){
                allDay.push(<li key={key++} onClick={this.handleClick.bind(this, new Date(year, month -1, m))} className={year + '-' + month + '-' + m == selected ? 'js_calendar_selected' : !i && m < date ? 'js_calendar_gray' : ''}>{holiday[month + '-' + m] || m}</li>);
            }
            data.push({
                'title': year + '年' + month + '月',
                'allDay': allDay
            })
        }
        return (
            <div className="js_calendar">
                <div className="js_calendar_title">
                    <ul>
                    {week.map(function(item, index){
                        return(<li key={index}>{item}</li>)
                    })}
                    </ul>
                </div>
                <div className="js_calendar_info">
                {data.map(function(item, index){
                    return(
                        <div key={index}>
                            <h3>{item.title}</h3>
                            <ul>{item.allDay}</ul>
                        </div>
                    )
                })}
                </div>
            </div>
        );
    }
})
module.exports = Calendar;