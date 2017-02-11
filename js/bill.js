/**

JS 2015/7/29
 
 */


$(document).ready(function() {
    // 第一页 进入页面的动画
    function anmiteFirst(){
        $('.section1').find('#pageFTxt').delay(100).animate({
            top: '0em',opacity: '1'
        }, 1000, 'easeOutExpo');
        
        $('.section1').find('#birthYear').delay(500).animate({
            left: '0',opacity: '1'
        }, 1000, 'easeOutExpo');
        $('.section1').find('#birthMonth').delay(700).animate({
            left: '0',opacity: '1'
        }, 1000, 'easeOutExpo');
        $('.section1').find('#birthDayTime').delay(900).animate({
            left: '0',opacity: '1'
        }, 1000, 'easeOutExpo');
        $('.section1').find('#birthdayRank').delay(1800).animate({
            left: '0',opacity: '1'
        }, 1000, 'easeOutExpo');
        $('.section1').find('#bgF').delay(2000).animate({
            bottom: '4em',opacity: '1'
        }, 1000, 'easeOutExpo');
        $('.section1').find('#aHi').delay(2300).animate({
            top: '-40%',opacity: '1'
        }, 1000, 'easeOutExpo');
        //$('.section1').find('#bRedMan').addClass('scalbRedMan').delay(220000);
        //say(3);
    }
    anmiteFirst();

    verticalCentered:'top',
    $.fn.fullpage({
        resize:true,
        //anchors: ['1Time', '2Invest', '3Amount', '4invest', '5Last'],
        //anchors: ['1Time', '2Invest', '3Amount', '4invest', '5Last'],
        afterLoad: function(anchorLink, index){
            if(index == 1){
                $('.section1').find('#pageFTxt').delay(100).animate({
                    top: '0em',opacity: '1'
                }, 1000, 'easeOutExpo');
                $('.section1').find('#aHi').delay(300).animate({
                    top: '-50%',opacity: '1'
                }, 1000, 'easeOutExpo');
                $('.section1').find('#birthYear').delay(500).animate({
                    left: '0',opacity: '1'
                }, 1000, 'easeOutExpo');
                $('.section1').find('#birthMonth').delay(700).animate({
                    left: '0',opacity: '1'
                }, 1000, 'easeOutExpo');
                $('.section1').find('#birthDayTime').delay(900).animate({
                    left: '0',opacity: '1'
                }, 1000, 'easeOutExpo');
                $('.section1').find('#birthdayRank').delay(1800).animate({
                    left: '0',opacity: '1'
                }, 1000, 'easeOutExpo');
                $('.section1').find('#bgF').delay(2000).animate({
                    bottom: '4em',opacity: '1'
                }, 1000, 'easeOutExpo');
                //$('.section1').find('#bRedMan').addClass('scalbRedMan').delay(220000);
                //say(3);
            }
            if(index == 2){
                $('.section2').find('#pageSTxt').delay(100).animate({
                    top: '0em',opacity: '1'
                }, 1000, 'easeOutExpo');
                $('.section2').find('#firstInvestY').delay(500).animate({
                    left: '0',opacity: '1'
                }, 1000, 'easeOutExpo');
                $('.section2').find('#firstInvestM').delay(700).animate({
                    left: '0',opacity: '1'
                }, 1000, 'easeOutExpo');
                $('.section2').find('#firstInvestD').delay(900).animate({
                    left: '0',opacity: '1'
                }, 1000, 'easeOutExpo');
                $('.section2').find('#firstAmount').delay(1600).animate({
                    left: '0',opacity: '1'
                }, 1000, 'easeOutExpo');
                $('.section2').find('#bgS').delay(1800).animate({
                    bottom: '4em',opacity: '1'
                }, 1000, 'easeOutExpo');
                $('.section2').find('#bLvya').delay(60000).addClass('scalbRedMan');
                $('.section2').find('#bLvya').delay(85000).attr('src',"http://kxe-www-168.oss-cn-hangzhou.aliyuncs.com/activity/anniversary/bLvya.gif");
            }
            if(index == 3){
                $('.section3').find('#pageTTxt').delay(100).animate({
                    top: '0em',opacity: '1'
                }, 1000, 'easeOutExpo');
                $('.section3').find('#investTerm').delay(500).animate({
                    left: '0',opacity: '1'
                }, 1000, 'easeOutExpo');
                $('.section3').find('#investProfits').delay(700).animate({
                    left: '0',opacity: '1'
                }, 1000, 'easeOutExpo');
                $('.section3').find('#profitsRankPercent').delay(900).animate({
                    left: '0',opacity: '1'
                }, 1000, 'easeOutExpo');
                $('.section3').find('#bgT').delay(1800).animate({
                    bottom: '4em',opacity: '1'
                }, 1000, 'easeOutExpo');
            }
            if(index == 4){
                $('.section4').find('#pageFoTxt').delay(100).animate({
                    top: '0em',opacity: '1'
                }, 1000, 'easeOutExpo');
                $('.section4').find('#peakInvest').delay(500).animate({
                    left: '0',opacity: '1'
                }, 1000, 'easeOutExpo');
                $('.section4').find('#withdrawTimes').delay(700).animate({
                    left: '0',opacity: '1'
                }, 1000, 'easeOutExpo');
                $('.section4').find('#depositeTimes').delay(900).animate({
                    left: '0',opacity: '1'
                }, 1000, 'easeOutExpo');
                $('.section4').find('#bgF').delay(1800).animate({
                    bottom: '4em',opacity: '1'
                }, 1000, 'easeOutExpo');
            }
            if(index == 5){
                $('.section5').find('#pageFiTxt').delay(100).animate({
                    top: '0em',opacity: '1'
                }, 1000, 'easeOutExpo');
                $('.section5').find('#histSum').delay(500).animate({
                    left: '0',opacity: '1'
                }, 1000, 'easeOutExpo');
                $('.section5').find('#xjAmount').delay(700).animate({
                    left: '0',opacity: '1'
                }, 1000, 'easeOutExpo');
                $('.section5').find('#bgFi').delay(1800).animate({
                    bottom: '14em',opacity: '1'
                }, 1000, 'easeOutExpo');
            }
        },
        onLeave: function(index, direction){
            if(index == '1'){  
                $('.section1').find('#pageFTxt').delay(100).animate({
                    top: '-1em',opacity: '0'
                }, 1000, 'easeOutExpo');
                $('.section1').find('#bgF').delay(100).animate({
                    bottom: '5em',opacity: '0'
                }, 1000, 'easeOutExpo');
                $('.section1').find('#aHi').delay(600).animate({
                    top: '-50%',opacity: '0'
                }, 1000, 'easeOutExpo');
                $('.section1').find('#birthYear').delay(400).animate({
                    left: '-.5em',opacity: '0'
                }, 1000, 'easeOutExpo');
                $('.section1').find('#birthMonth').delay(600).animate({
                    left: '-.5em',opacity: '0'
                }, 1000, 'easeOutExpo');
                $('.section1').find('#birthDayTime').delay(800).animate({
                    left: '-.5em',opacity: '0'
                }, 1000, 'easeOutExpo');
                $('.section1').find('#birthdayRank').delay(1000).animate({
                    left: '-.5em',opacity: '0'
                }, 1000, 'easeOutExpo');
                $('.section1').find('#bRedMan').delay(60000).removeClass('scalbRedMan');
            }
            if(index == '2'){
                $('.section2').find('#pageSTxt').delay(100).animate({
                    top: '-1em',opacity: '0'
                }, 1000, 'easeOutExpo');
                $('.section2').find('#bgS').delay(300).animate({
                    bottom: '5em',opacity: '0'
                }, 1000, 'easeOutExpo');
                $('.section2').find('#firstInvestY').delay(500).animate({
                    left: '-.5em',opacity: '0'
                }, 1000, 'easeOutExpo');
                $('.section2').find('#firstInvestM').delay(700).animate({
                    left: '-.5em',opacity: '0'
                }, 1000, 'easeOutExpo');
                $('.section2').find('#firstInvestD').delay(900).animate({
                    left: '-.5em',opacity: '0'
                }, 1000, 'easeOutExpo');
                $('.section2').find('#firstAmount').delay(1000).animate({
                    left: '-.5em',opacity: '0'
                }, 1000, 'easeOutExpo');
                $('.section2').find('#bLvya').delay(60000).removeClass('scalbRedMan');
                $('.section2').find('#bLvya').delay(85000).attr('src',"http://kxe-www-168.oss-cn-hangzhou.aliyuncs.com/activity/anniversary/bLvya.png");
            }
            if(index == '3'){
                $('.section3').find('#pageTTxt').delay(100).animate({
                    top: '-1em',opacity: '0'
                }, 1000, 'easeOutExpo');
                $('.section3').find('#bgT').delay(300).animate({
                    bottom: '5em',opacity: '0'
                }, 1000, 'easeOutExpo');
                $('.section3').find('#investTerm').delay(500).animate({
                    left: '-.5em',opacity: '0'
                }, 1000, 'easeOutExpo');
                $('.section3').find('#investProfits').delay(700).animate({
                    left: '-.5em',opacity: '0'
                }, 1000, 'easeOutExpo');
                $('.section3').find('#profitsRankPercent').delay(900).animate({
                    left: '-.5em',opacity: '0'
                }, 1000, 'easeOutExpo');
                }
            if(index == '4'){
                $('.section4').find('#pageFoTxt').delay(100).animate({
                    top: '-1em',opacity: '0'
                }, 1000, 'easeOutExpo');
                $('.section4').find('#bgF').delay(100).animate({
                    bottom: '5em',opacity: '0'
                }, 1000, 'easeOutExpo');
                $('.section4').find('#peakInvest').delay(100).animate({
                    left: '-.5em',opacity: '0'
                }, 1000, 'easeOutExpo');
                $('.section4').find('#withdrawTimes').delay(100).animate({
                    left: '-.5em',opacity: '0'
                }, 1000, 'easeOutExpo');
                $('.section4').find('#depositeTimes').delay(100).animate({
                    left: '-.5em',opacity: '0'
                }, 1000, 'easeOutExpo');
            }
            if(index == '5'){
                $('.section5').find('#pageFiTxt').delay(100).animate({
                    top: '-1em',opacity: '0'
                }, 1000, 'easeOutExpo');
                $('.section5').find('#bgFi').delay(300).animate({
                    bottom: '15em',opacity: '0'
                }, 1000, 'easeOutExpo');
                $('.section5').find('#histSum').delay(500).animate({
                    left: '-.5em',opacity: '0'
                }, 1000, 'easeOutExpo');
                $('.section5').find('#xjAmount').delay(700).animate({
                    left: '-.5em',opacity: '0'
                }, 1000, 'easeOutExpo');
            }
        }
    });
});


// 数字千分号分隔 方法
function comdify(n)
{
	if(n == null || n.length == 0){
		return;
	}
var re=/\d{1,3}(?=(\d{3})+$)/g;
var n1=n.replace(/^(\d+)((\.\d+)?)$/,function(s,s1,s2){return s1.replace(re,"$&,")+s2;});
return n1;
}

var histSum;
$(function(){
    // 获取URL 数组
    var $_GET = (function(){
        var url=decodeURIComponent(document.URL);
        //var url = window.document.location.href.toString();
        var u = url.split("?");
        if(typeof(u[1]) == "string"){
            u = u[1].split("&");
            var get = {};
            for(var i in u){
                var j = u[i].split("=");
                get[j[0]] = j[1];
            }
            return get;
        } else {
            return {};
        }
    })();
	
	var flagON = $_GET['flag'];
	flagON = flagON.replace(/#/g, "");
	if(flagON == "true"){
    }else{
        window.location.href="http://hot.xiaojinlicai.com/activity/anniversary/billNone.html";
    }

    //获取数据
    var rank = $_GET['ab_invest_profits_rank']; //投资战胜了多少人 暂时未使用
    var investTerm = $_GET['ab_invest_term']; //累计投资时间
    var firstAmount = comdify($_GET['ab_first_invest_amount']); //首次投资金额
    var investProfits = comdify($_GET['ab_invest_profits']); //累计投资收益
    var peakInvest = comdify($_GET['ab_peak_invest']); //最高在投金额
    var withdrawTimes = $_GET['ab_withdraw_times']; //取现次数
    var depositeTimes = $_GET['ab_deposite_times']; //充值次数
     histSum = comdify($_GET['ab_invest_hist_sum']); //历史累计投资金额
    var investDate = $_GET['ab_first_invest_date']; //首次投资日期
    var birthday = $_GET['ab_birthday']; //加入小金理财日期
    var birthdayRank = comdify($_GET['ab_birthday_rank']); //成为小金用户排名
    var profitsRankPercent = $_GET['ab_invest_profits_rank_percent']; // 投资战胜了多少人百分比
   

    var investDateStr = new Array();
        investDateStr = investDate.split('-'); // 分割首次投资日期 年月日

    var birthdayStr = new Array();
        birthdayStr = birthday.split('-'); // 加入小金理财 年月日

    //$("#rank").text(rank);
    $("#investTerm").text(investTerm);
    $("#firstAmount").text(firstAmount);
    $("#investProfits").text(investProfits);
    $("#peakInvest").text(peakInvest);
    $("#withdrawTimes").text(withdrawTimes);
    $("#depositeTimes").text(depositeTimes);
    $("#histSum").text(histSum);
    $("#birthdayRank").text(birthdayRank);
    $("#profitsRankPercent").text(profitsRankPercent + "%");

    var investY = investDateStr[0];
    var investM = investDateStr[1];
    var investD = investDateStr[2];

    var birthY = birthdayStr[0];
    var birthM = birthdayStr[1];
    var birthD = birthdayStr[2];

    // 第一次注册小金 年 月 日
    $("#birthYear").text(birthY);
    $("#birthMonth").text(birthM);
    $("#birthDayTime").text(birthD);

    // 第一次投资小金 年 月 日
    $("#firstInvestY").text(investY);
    $("#firstInvestM").text(investM);
    $("#firstInvestD").text(investD);
});





