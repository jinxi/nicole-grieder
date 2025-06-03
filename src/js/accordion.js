defineProps(['data']);
        // create array of icons according to the panel id
        var iconList = [];
          iconList[0] = '#add';
        

        function toggleAccordion(panelClicked){
            console.log(panelClicked.target.closest(".accordion-panel"));
            // todo: make dynamic sometime
            const index = panelClicked.target.closest(".accordion-panel").id;
            const panelToToggle = panelClicked.target.closest(".accordion-trigger");
            // const contentToToggle = panelCliecked.target.closest(".accordion-content");
            //if open-> close; if close -> open
            // console.log(panelToToggle.getAttribute('aria-expanded'));
            
            const panelContent = panelToToggle.parentElement.parentElement.querySelector("div");
            const panelIcon = panelToToggle.querySelector("use");

            if(panelIcon.getAttribute('xlink:href') != '#close'){
              iconList[index] = panelIcon.getAttribute('xlink:href');
              console.log("Icon added to the iconList: " + iconList[index]);
            }
            console.log(iconList);

            const panelStatus = panelToToggle.getAttribute('aria-expanded');
            console.log(panelStatus);
            if(panelStatus==='true'){
                // closes the panel
                panelToToggle.setAttribute('aria-expanded', false);
                panelContent.setAttribute('aria-hidden', true);
                // check if an icon is set in the panel
                if(iconList[index]==''){
                  panelIcon.setAttribute('xlink:href', iconList[0]);
                  console.warn("icon of clicked panel was empty, icon got set to default add icon. to use custom icon, please set the xlink:href in the clicked panel.");
                }else{
                  panelIcon.setAttribute('xlink:href', iconList[index]);
                }
                console.log(panelIcon);
                console.log("-- closed the panel -- ");
            }else{
                // opens the panel
                panelToToggle.setAttribute('aria-expanded', true);
                panelContent.setAttribute('aria-hidden', false);
                panelIcon.setAttribute('xlink:href','#close');
                console.log(panelIcon);
                console.log("-- opened the panel -- ");
            }
        }