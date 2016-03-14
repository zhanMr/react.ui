//日历
import React from 'react';
const Calendar = React.createClass({
    propTypes:{
        start: React.PropTypes.object,
        member: React.PropTypes.number,
        week: React.PropTypes.array,
        selected: React.PropTypes.string,
        holiday: React.PropTypes.object
    },
    getInitialState: function(){
       return {
           'selected': ''
       }
    },
    getDefaultProps: function(){
        return  {
            start: null,//起始日期
            member: 1, //要显示的月数,
            week: ['日', '一', '二', '三', '四', '五', '六'],
            //节日
            holiday: {}
        }
    },
    handleClick: function(date){
        this.setState({
            'selected': date.getFullYear()  + '-' + (date.getMonth() + 1) + '-' + date.getDate()
        });
    },
    render: function() {
        let {holiday, member, week} = this.props;
        let {selected} = this.state;
        let start = this.props.start || new Date();
        let[year, month, date, key, data] = [start.getFullYear(), start.getMonth(), start.getDate(), 0, []];
        for(let i = 0; i < member; i++){
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
                allDay.push(<li key={key++} onClick={this.handleClick.bind(this, new Date(year, month -1, m))} className={year + '-' + month + '-' + m == selected ? 'cui_cld_selected' : !i && m < date ? 'cui_cld_expire' : ''}>{holiday[month + '/' + m] || m}</li>);
            }
            data.push({
                'title': year + '年' + month + '月',
                'allDay': allDay
            })
        }
        return (
            <div>
                <ul className="cui_cldweek" style={{position:"static"}}>
                    {week.map((item, index) => { return(<li key={index}>{item}</li>)})}
                </ul>
                <section className="cui_cldunit">
                    {data.map((item, index) => {
                        return(
                            <div key={index}>
                                <h1 className="cui_cldmonth">{item.title}</h1>
                                <ul className="cui_cld_daybox">{item.allDay}</ul>
                            </div>
                        )
                    })}
                </section>
            </div>
        );
    }
});
export default Calendar;
