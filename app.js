const ecoTip = document.querySelector('.ecoRound__tip--text-in');
const userMoney = document.querySelector('.ecoRound__write--money');
const userDate = document.querySelector('.ecoRound__write--date');
const userCalBtn = document.querySelector('.ecoRound__write--cal');
const ecoRoundWrite = document.querySelector('.ecoRound__write');
const ecoRoundWriteText = document.querySelector('.ecoRound__write--text');
const ecoRoundView = document.querySelector('.ecoRound__view');
const ecoRoundViewMoney = document.querySelector('.ecoRound__view--money');
const ecoRoundViewDate = document.querySelector('.ecoRound__view--days');
const ecoRoundViewRetrunBtn = document.querySelector('.ecoRound__view--return');

const tips = [
    '직장인의 평균 하루 용돈은 약 16,790원입니다.',
    '직장인의 한달 평균 지출하는 약 50%는 식비입니다.',
    '남은 날짜는 계산한 당일 포함 날짜입니다.',
    '평균 대학생의 한달 생활비는 592,000원입니다.',
    '평균 직장인의 한달 생활비는 1,160,000원입니다.'
];

userMoney.addEventListener('keyup', (e) => { e.target.value = numberWithCommas(e.target.value); })
userCalBtn.addEventListener('click', () => { moneyCal(); })
ecoRoundViewRetrunBtn.addEventListener('click', () => { reset(); })
window.addEventListener('load', () => { dateSet(); });

function reset(){
    dateSet();
    userMoney.value = '';
    ecoRoundWrite.style.display = 'grid';
    ecoRoundView.style.display = 'none';
    ecoRoundWriteText.style.display = 'none';
}

function moneyCal(){
    if(userMoney.value === ''){
        ecoRoundWriteText.style.display = 'block';
        return 0;
    }
    const today = new Date();
    const today_Time = today.getTime();
    const thatDay_Time = new Date(userDate.value).getTime();
    const difference = Math.abs(thatDay_Time - today_Time);
    const days = Math.ceil(difference / (1000 * 3600 * 24)) + 1;
    const money = numberWithCommas(userMoney.value).replace(/,/g,'');
    const split_money = String(Math.floor(money / days)).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    ecoRoundViewMoney.textContent = `${split_money}원`;
    ecoRoundViewDate.textContent = `${days}일 남았습니다 !`;
    ecoRoundWrite.style.display = 'none';
    ecoRoundView.style.display = 'grid';
}

function dateSet(){
    const today = new Date();
    const dd = (today.getDate()+1) > 10 ? (today.getDate()+1) : `0${(today.getDate()+1)}`;
    const mm = (today.getMonth()+1) > 10 ? (today.getMonth()+1) : `0${(today.getMonth()+1)}`;
    const yyyy = today.getFullYear();
    const today_Date = `${yyyy}-${mm}-${dd}`;
    userDate.setAttribute("min",today_Date);
    userDate.value = today_Date;
    ecoTip.textContent = tips[Math.floor(Math.random() * tips.length)];
}

function numberWithCommas(money) {
    let num = money;
	num = num.replace(/,/g,'');
    num = num.replace(/[^0-9]/g,'');
	num = num.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num;
}