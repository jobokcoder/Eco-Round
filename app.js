const userMoney = document.querySelector('.ecoRound__form--money');
const userDate = document.querySelector('.ecoRound__form--date');
const userCalBtn = document.querySelector('.ecoRound__form--cal');

userMoney.addEventListener('keyup', (e) => { numberWithCommas(e.target); })
userCalBtn.addEventListener('click', () => { moneyCal(); })

window.addEventListener('load', () => { dateSet(); });

function moneyCal(){
    const today = new Date();
    const today_Time = today.getTime();
    const thatDay_Time = new Date(userDate.value).getTime();
    const difference = Math.abs(thatDay_Time - today_Time);
    const days = Math.ceil(difference / (1000 * 3600 * 24)) + 1;
    console.log(days);
}

function dateSet(){
    const today = new Date();
    const dd = (today.getDate()+1) > 10 ? (today.getDate()+1) : `0${(today.getDate()+1)}`;
    const mm = (today.getMonth()+1) > 10 ? (today.getMonth()+1) : `0${(today.getMonth()+1)}`;
    const yyyy = today.getFullYear();
    const today_Date = `${yyyy}-${mm}-${dd}`;
    userDate.setAttribute("min",today_Date);
    userDate.value = today_Date;
}

function numberWithCommas(x) {
	x.value = x.value.replace(/,/g,'');
    x.value = x.value.replace(/[^0-9]/g,'');
	x.value = x.value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}