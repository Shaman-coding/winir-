import React from 'react';
import M from './MainPage.module.css';

export const MainPage = () => {
  


    return (
        <div className={M.wrapperMain}>
           <div className={M.title}>
               <h2>Стоматологическая клиника "Винир+"</h2>
           </div>

           <div className={M.wrapperBlock}>

           <div className={M.wrapperDescription}>
                    <p>
                    Лечение зубов — качественно, внимательно, безболезненно. Стремление руководства стоматологической клиники «Винир+» <br/>к ее развитию в самом широком смысле слова позволило создать превосходные условия для пациентов и уникальный союз <br/>единомышленников-врачей, любящих свою специальность — стоматологию.<br/><br/>

                    Большинство населения ассоциирует лечение зубов с сильными болезненными ощущениями — это связано со стереотипом прошлого <br/>отечественной медицины, о котором следует забыть. В наши дни при лечении зубов применяются инновационные технологии, которые <br/>позволяют лечить зубы безболезненно и моментально. Сегодня наша стоматологическая клиника оказывает услуги по лечению зубов, <br/>которое основано на современных разработках.<br/><br/>

                    Диагностика, профилактика и лечение зубов соответствует мировым стандартам стоматологии. Стоматологическая клиника «Винир+»<br/> при лечении зубов максимально заботится о восстановлении вашего здоровья в полном смысле этого слова, выбирая при этом <br/>оптимальный путь!
                                </p>
               </div>
               

               <div className={M.wrapperImg}>
                  <div className={M.Imgitem}>
                    <img src={'https://malexeum.com/wordpress/wp-content/uploads/2015/10/DSC9868.jpg'}/>
                  </div>

                  <div className={M.Imgitem}>
                    <img src={'https://malexeum.com/wordpress/wp-content/uploads/2015/10/DSC9844.jpg'}/>
                  </div>

                  <div className={M.Imgitem}>
                    <img src={'https://apartmentinteriors.ru/wp-content/uploads/family-dental-clinic-08.jpg'}/>
                  </div>
               </div>

              

           </div>
        </div>
    )
}