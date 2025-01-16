function openTab(event, tabName){

    const contents = document.querySelectorAll('.tab-page');

    contents.forEach(content => content.classList.remove('active'));


    const tabs = document.querySelectorAll('.single-tab');
    tabs.forEach(tab => tab.classList.remove('active'));


    document.getElementById(tabName).classList.add('active');
    event.currentTarget.classList.add('active');

}
