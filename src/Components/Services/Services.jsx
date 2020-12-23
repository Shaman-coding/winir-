import React from 'react';
import S from './Services.module.css';


export const Services = () => {
    return (
        <div className={S.Services}>
            <div className={S.title}>
                <h2>Услуги</h2>
            </div>

            <div className={S.WrapperCards}>

                    <div className={S.ServicesCards}>
                        <div className={S.img}>
                            <img src={'https://profnik.ru/upload/medialibrary/21d/21d17a11943fb7eb6a0541ec94b6d375.jpg'}/>
                        </div>

                        <div className={S.description}>
                        <h4>Профилактика и гигиена полости рта</h4> 
                        </div>
                    </div>

                    <div className={S.ServicesCards}>
                        <div className={S.img}>
                            <img src={'https://plaza-dent.ru/wp-content/uploads/2019/07/Terapevticheskaya-stomatologiya.jpg'}/>
                        </div>

                        <div className={S.description}>
                        <h4>Стоматология терапевтическая</h4> 
                        </div>
                    </div>
                    
                    <div className={S.ServicesCards}>
                        <div className={S.img}>
                            <img src={'https://dental-clinic.expert/wp-content/uploads/2019/05/Parodontologiya-500x500.jpg'}/>
                        </div>

                        <div className={S.description}>
                        <h4>Стоматология косметическая</h4> 
                        </div>
                    </div>
                    <div className={S.ServicesCards}>
                        <div className={S.img}>
                            <img src={'https://orbital-dent.ru/wp-content/uploads/2019/10/id-038.width-500.jpg'}/>
                        </div>

                        <div className={S.description}>
                        <h4>Стоматология ортопедическая</h4> 
                        </div>
                    </div>

                    <div className={S.ServicesCards}>
                        <div className={S.img}>
                            <img src={'https://www.stomatologia-ilatan.ru/wp-content/uploads/2019/02/hirurgiya9.jpg'}/>
                        </div>

                        <div className={S.description}>
                        <h4>Стоматология хирургическая</h4> 
                        </div>
                    </div>

                    <div className={S.ServicesCards}>
                        <div className={S.img}>
                            <img src={'https://lh3.googleusercontent.com/proxy/zm5rnVPOIMnZJffz1Spk2yGRs-mYTugJKJW8KnTcTqQ4wBq3rFAqGClnI_uTr-8xlnSEdGbvJktpulZgWtvrvRNFbCfPuCu0fHURZ4fjJ6AOChc1b4iyJmZvoOdsj2HdKadGDflMeBZ3bCsGyuIye4b7MB09fcYd5w-8OBr0RBo'}/>
                        </div>

                        <div className={S.description}>
                        <h4>Дентальная имплантация</h4> 
                        </div>
                    </div>

                    <div className={S.ServicesCards}>
                        <div className={S.img}>
                            <img src={'https://www.ddmedic.ru/wp-content/uploads/2019/07/rentgenovskij-snimok-zuba.jpg'}/>
                        </div>

                        <div className={S.description}>
                        <h4>Рентген зубов</h4> 
                        </div>
                    </div>
            </div>
        </div>
    )
}