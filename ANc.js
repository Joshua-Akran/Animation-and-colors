const body=document.querySelector('body')

const BoxContainer=document.querySelector('.box-container')
const SliderInput=document.querySelector('#slider-input')
const AllPill=document.querySelectorAll('.pill')
const AllBox=document.querySelectorAll('.box')
const AllhiddenPills=document.querySelectorAll('.hidden-pill')
const allArrows=document.querySelectorAll('.arrow')
const Expandpill=document.querySelector('#expand')
const XletterPath=document.querySelector('#x-letter')
const XLetterSVG=document.querySelector('#x-svg')
const XBOX=document.querySelector('.x-box')
const Reverse=document.querySelector('#reverse')
const IconPath=document.querySelector('#icon')
const hiddenBox=document.querySelector('.hidden-box')
const textBox=document.querySelector('.hidden-box .text-box')

let paletteIndex = 0
const XletterIndex = 11
const socialFanIndex = 1
const rotateIconIndex = 3

//start state
XLetterSVG.style.fill = colorPalettes[paletteIndex][XletterIndex].fill
AllPill.forEach((pill, i) => 
pill.style.backgroundColor = colorPalettes[paletteIndex][i].fill)
AllhiddenPills.forEach(hiddenPill => hiddenPill.style.backgroundColor = colorPalettes[paletteIndex][socialFanIndex].fill)

const Xpand=()=> {
    if(hiddenBox.clientWidth !==0){
        textBox.classList.add('hidden')
        setTimeout(()=>hiddenBox.style.width='0',200)
    }else{
 hiddenBox.style.width='1700px' 
 setTimeout(()=>textBox.classList.remove('hidden'), 500 )
    }
}
Expandpill.addEventListener('click',Xpand)


const reverse=()=>{
    if(BoxContainer.style.flexWrap ==='wrap'){
        BoxContainer.style.flexWrap ='wrap-reverse'
    }else{
        BoxContainer.style.flexWrap ='wrap'
    }
}


Reverse.addEventListener('click',reverse)

const addTheme =
    (bodyBackgroundColor,
     strokeWidth,
     svgFill,
     opacity,
     lineColor,
     borderRadius,
     boxBackgroundColor,
     pillBackgroundcolor) =>{        //() means pass through

    body.style.backgroundColor = bodyBackgroundColor
    XletterPath.style.strokeWidth = strokeWidth
    XletterPath.style.stroke = lineColor || colorPalettes[paletteIndex][XletterIndex].altStroke
    XLetterSVG.style.fill = svgFill || colorPalettes[paletteIndex][XletterIndex].fill    //|| means or
    XLetterSVG.style.opacity = opacity
    XBOX.style.backgroundColor = boxBackgroundColor || colorPalettes[paletteIndex][XletterIndex].fill
    IconPath.style.stroke = lineColor || colorPalettes[paletteIndex][rotateIconIndex].altStroke
    IconPath.style.strokeWidth = strokeWidth

    AllBox.forEach((box,i) => 
      box.style.backgroundColor = boxBackgroundColor || colorPalettes[paletteIndex][i].fill
    )
    AllPill.forEach((pill,i) => {
      pill.style.opacity = opacity
      pill.style.backgroundColor = pillBackgroundcolor || colorPalettes[paletteIndex][i].fill
      pill.style.borderWidth = strokeWidth
      pill.style.borderColor = lineColor || colorPalettes[paletteIndex][i].altStroke
      pill.style.borderBlockStyle = 'solid'
      pill.style.borderRadius = borderRadius
    })

    AllhiddenPills.forEach(hiddenPill => {
        hiddenPill.style.opacity = opacity
        hiddenPill.style.borderWidth = strokeWidth
        hiddenPill.style.backgroundColor =  pillBackgroundcolor || colorPalettes[paletteIndex][i].fill
        hiddenPill.style.borderColor = lineColor || colorPalettes[paletteIndex][socialFanIndex].altStroke
        hiddenPill.style.borderRadius = borderRadius
    })

    allArrows.forEach(Arrow => {
        Arrow.style.borderBlockStyle = 'solid'
        Arrow.style.borderColor = lineColor
        Arrow.style.borderWidth = '0'+ strokeWidth + ' ' + strokeWidth + '0'
        Arrow.style.opacity = opacity
    })
}

const moveSlider= ()=>{
    const SliderInput=document.querySelector('#slider-input')
    const SliderVAlue=SliderInput.value

    if(SliderVAlue == 0){
        bodyBackgroundColor,
        strokeWidth,
        svgFill,
        opacity,
        lineColor,
        borderRadius,
        boxBackgroundColor,
        pillBackgroundcolor

        addTheme('white','12px',null,1,'rgb(38,38,38)','100px','white',null)
    }
    if(SliderVAlue>1 && SliderVAlue<=3){//&& means but also

        addTheme('white','2px','white',0.5,null,'75px',null,'white')
    }
    if(SliderVAlue>=4 && SliderVAlue<=6){
        addTheme('white','1px','white',0.5,null,'90px',null,'white')
    }
    if(SliderVAlue>=7 && SliderVAlue< 9){
        addTheme('white','2px','white',0.5,'rgb(38,38,38)','50px',null,'white')
    }
    if(SliderVAlue == 10){
        addTheme('rgb(38,38,38)','12px','white',1,'black',0,'transparent','white')
    }
}


SliderInput.addEventListener('input',moveSlider)

const changePalette = () => {
    XletterPath.classList.add('pulse')
    if(paletteIndex >= 2){
        paletteIndex = 0
    } else {
        paletteIndex++
    }
    moveSlider()
    setTimeout(()=> XletterPath.classList.remove('pulse'),500)
}


XBOX.addEventListener('click', changePalette)

