document.querySelector('.link-about').addEventListener('click',loadText);
let year=document.getElementById("inputYear");
let semester=document.getElementById("inputSemester");
function loadText(){
    let xhr=new XMLHttpRequest();
        xhr.open('GET','ebs.json',true);
        xhr.onload=function(){
            if(this.status==200){
                let data=JSON.parse(this.response)
                let info=data[year.value].EBS[1].semester[semester.value]
                console.log()
            
                let html=`
                <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" id="module1" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <p class="module1Description"></p>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" id="module2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <p class="module2Description"></p>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button collapsed" id="module3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            
                        </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <p class="module3Description" ></p>
                        </div>
                        </div>

                        <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button collapsed" id="module4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseTwo">
                            
                        </button>
                        </h2>
                        <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <p class="module4Description"></p>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button collapsed" id="module5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseTwo">
                           
                        </button>
                        </h2>
                        <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <p class="module5Description"></p>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button collapsed" id="module6" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseTwo">
                           
                        </button>
                        </h2>
                        <div id="collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <p class="module6Description"></p>
                        </div>
                    </div>
                    </div>
                </div>`

                document.getElementById('content').innerHTML=html;

                let module1=document.querySelector('#module1');
                let module1Description=document.querySelector('.module1Description');

                let module2=document.querySelector('#module2');
                let module2Description=document.querySelector('.module2Description');

                let module3=document.querySelector('#module3');
                let module3Description=document.querySelector('.module3Description');

                let module4=document.querySelector('#module4');
                let module4Description=document.querySelector('.module4Description');

                let module5=document.querySelector('#module5');
                let module5Description=document.querySelector('.module5Description');

                let module6=document.querySelector('#module6');
                let module6Description=document.querySelector('.module6Description');

                if(year.value==1||2||3||4 && semester.value==1||2||3||4){
                    module1.innerHTML=info.module1.name;
                    module1Description.innerHTML=info.module1.description;

                    module2.innerHTML=info.module2.name;
                    module2Description.innerHTML=info.module2.description;

                    module3.innerHTML=info.module3.name;
                    module3Description.innerHTML=info.module3.description;

                    module4.innerHTML=info.module4.name;
                    module4Description.innerHTML=info.module4.description;

                    module5.innerHTML=info.module5.name;
                    module5Description.innerHTML=info.module5.description;

                    module6.innerHTML=info.module6.name;
                    module6Description.innerHTML=info.module6.description;

                }
            }
        }

        xhr.send();
};