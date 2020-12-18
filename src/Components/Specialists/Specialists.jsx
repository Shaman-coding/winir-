import React from 'react';
import C from './Specialists.module.css';

export const Specialists = () => {
    return (
        <div className={C.Specialists }>
           <div className={C.title}><h2>Специалисты</h2></div>

           <div className={C.subtitle}>
                <h4>Информация о врачах OOO "ВИНИР+"</h4>
           </div>

                <div className={C.wrapperWinir}>
                    <div className={C.wrapperDoctor}>
                        <div className={C.winirDoc}>
                            <div className={C.imgPhoto}>
                                <img src={'https://psmb-neos-resources.hb.bizmrg.com/target/ermolaev/0f307025f2ddd4f0367e80dcf1ae4b8d54d66f75/%D0%A7%D0%B5%D1%80%D0%BD%D0%BE%D0%B2%D0%B0-400x400.jpg'}/>
                            </div>  
                               
                            
                            <div className={C.InfoAboutDoc}>
                                <h5>Коренева И.В.</h5> 
                                <p>Диплом СТ № 636697 <br/>
                                    Сертификат РМА № 106807 действителен до 06.05.2015 г.</p>
                           </div>
                        </div>
                    
                    </div>


                    <div className={C.wrapperDoctor}>
                        <div className={C.winirDoc}>
                            <div className={C.imgPhoto}>
                                <img src={'https://www.novodent.ru/images/doctors/bezdelina/bezdelina_valentina_aleksandrovna.jpg'}/>
                            </div>  
                               
                            
                            <div className={C.InfoAboutDoc}>
                                <h5>Дзебых С.В.</h5> 
                                <p>Диплом СБ № 6612425 <br/>
                                   Сертификат А № 4590121 действителен до 22.02.2016 г.</p>
                           </div>
                        </div>
                    
                    </div>


                    <div className={C.wrapperDoctor}>
                        <div className={C.winirDoc}>
                            <div className={C.imgPhoto}>
                                <img src={'https://stomklass.ru/wp-content/uploads/2020/07/whatsapp-image-2020-07-07-at-10.14.29-1-400x400.jpeg'}/>
                            </div>  
                               
                            
                            <div className={C.InfoAboutDoc}>
                                <h5>Хоронько А.В.</h5> 
                                <p>Диплом СБ №0004033 <br/>
                                   Сертификат А № 0979311 действителен до 06.05.2015 г.</p>
                           </div>
                        </div>
                    
                    </div>


                    <div className={C.wrapperDoctor}>
                        <div className={C.winirDoc}>
                            <div className={C.imgPhoto}>
                                <img src={'https://www.turkeyinlife.com/wp-content/uploads/2019/08/Hirurg-400x400.jpg'}/>
                            </div>  
                               
                            
                            <div className={C.InfoAboutDoc}>
                                <h5>Зиновьев Д.В.</h5> 
                                <p>диплом СБ 0058593 <br/>
                                   Сертификат А № 0928115 действителен до 22.02.2016 г.</p>
                           </div>
                        </div>
                    
                    </div>
            </div>




            <div className={C.subtitleKolibri}>
                <h4>Информация о врачах OOO "КОЛИБРИ"</h4>
           </div>

                <div className={C.wrapperWinir}>
                    <div className={C.wrapperDoctor}>
                        <div className={C.winirDoc}>
                            <div className={C.imgPhoto}>
                                <img src={'https://f-doctor.ru/wp-content/uploads/2020/02/9ac82888-217b-4ebd-b304-f53ae289b0aa-2-400x400.jpg'}/>
                            </div>  
                               
                            
                            <div className={C.InfoAboutDoc}>
                                <h5>Коротких Ю.А.</h5> 
                                <p>Диплом ВСВ № 0636539 <br/>
                                   Сертификат № 009878 действителен до 04.05.2021 г.</p>
                           </div>
                        </div>
                    
                    </div>


                    <div className={C.wrapperDoctor}>
                        <div className={C.winirDoc}>
                            <div className={C.imgPhoto}>
                                <img src={'https://www.prezi-dent.ru/assets/doctors/marino/mahanov-sa1.jpg'}/>
                            </div>  
                               
                            
                            <div className={C.InfoAboutDoc}>
                                <h5>Бабанина М.А.</h5> 
                                <p>Диплом ПП № 296806 <br/>
                                   Сертификат № 4060 действителен до 29.04.2021 г.
                                </p>
                           </div>
                        </div>
                    
                    </div>


                    <div className={C.wrapperDoctor}>
                        <div className={C.winirDoc}>
                            <div className={C.imgPhoto}>
                                <img src={'https://lh3.googleusercontent.com/proxy/m66v8aVjevt82jPtRudQASBNYLQtueO93F_gVbeVu9UwiYaiWjPxJh-2gwrIXxOTtehOUdo1nluvv7zwVTO9o1cRd56vrMo2ngy6i_eoSxzoBgdKbdG54aDLfc9L4I8pv7QuEktd88ANwBB_GQ'}/>
                            </div>  
                               
                            
                            <div className={C.InfoAboutDoc}>
                                <h5>Алутин А.И.</h5> 
                                <p>Диплом ПП-З № 060085 <br/>
                                 Сертификат № 14162 действителен до 11.12.2022 г.</p>
                           </div>
                        </div>
                    
                    </div>


                    <div className={C.wrapperDoctor}>
                        <div className={C.winirDoc}>
                            <div className={C.imgPhoto}>
                                <img src={'https://www.novodent.ru/images/doctors/dolmatov/dolmatov_stanislav_vladimirovich_v2.jpg'}/>
                            </div>  
                               
                            
                            <div className={C.InfoAboutDoc}>
                                <h5>Котов А.Ю.</h5> 
                                <p>Диплом КГ № 64680 <br/>
                                  Сертификат № 003699 действителен до 30.08.2019 г.</p>
                           </div>
                        </div>
                    
                    </div>
            </div>


            
           
        
    </div>
    )
}