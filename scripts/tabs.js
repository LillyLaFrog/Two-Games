class Tabs {
    constructor(container){
        this.container = container;
        this.tabs = container.querySelectorAll('.trigger');
    }
    init(){
        this.tabs.forEach(tab=>{
            tab.addEventListener('click', e =>{
                this.toggleTabs(e);
                console.log(e);
            });
        });
        console.log('howdy')
    }
    toggleTabs(e){
        //toggle tabs if an inactvie tab is clicked
        
        if(!e.target.classList.contains('active')){
            //remove active from all tabs and content elements, respectively
            this.tabs.forEach(tab=>{tab.classList.remove('active')});
            this.container.querySelectorAll('.content').forEach(c=>{c.classList.remove('active')});
            //assign active to clicked tab and accociated element
            e.target.classList.add('active');
            this.container.querySelector(e.target.getAttribute('data-target')).classList.add('active');
        }
    }
}
tabs = new Tabs(document.querySelector('.tabs'));
tabs.init();