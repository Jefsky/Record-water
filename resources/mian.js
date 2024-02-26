let ml = 0;
let msges =
["记得多喝水哦，水是生命之源，保持充足的水分可以让你的身体更加健康有活力！","喝水不仅可以帮助你保持水分平衡，还能提升你的精神状态，让你更加清醒和有精神。","多喝水有助于排毒养颜，让你的肌肤更加水润有光泽，同时也有助于预防多种疾病。","不要等到口渴了才想起喝水，定时定量地喝水可以保持身体的水分平衡，让你更加健康。","喝水是一种简单而有效的养生方法，它可以帮助你保持身体健康，增强免疫力，让你更加健康长寿。","水是最好的补品，喝水可以让你的身体充满活力，让你每天都充满能量和热情！","喝水是保持身体健康的基石，每一滴水都在为你的健康加分，所以别忘了多喝水哦！","水是天然的清洁剂，喝水可以帮助你清除体内的毒素和废物，让你的身体更加健康清洁。","喝水不仅能滋润你的喉咙，还能滋养你的心灵，让你感到宁静和满足。","喝水是一种爱护自己的方式，它能让你的身体保持最佳状态，让你更加自信和有魅力。"]
load();

function load(){
    document.getElementById('msg').innerText = msges[Math.floor(Math.random() * msges.length)];
    chrome.storage.local.get('ml', function(result) {
        // console.log('ml : ' + result.ml);
        let storage_ml = result.ml;
        if(storage_ml){
            console.log("恭喜🎉！您已记录喝水"+storage_ml+"ml，加油！");
            document.getElementById('ml').innerText = result.ml;
            ml =  result.ml;
        }
        
      });
    
}

document.getElementById('drinked').addEventListener("click",function(){
    // ml++;
    var get_ml = prompt("本次喝水记录（ml）", "500");
    if (get_ml != null) {
        ml = ml + Number(get_ml);
    }
    document.getElementById('ml').innerText = ml;
    chrome.storage.local.set({ml: ml}, function() {
        // console.log('ml saved.');
    });
})

document.getElementById('reset').addEventListener("click",function(){
    
        var r=confirm("确定要重置喝水记录？");
        if (r==true){
            chrome.storage.local.remove('ml',function(){
                console.log('重置成功');
            });
            document.getElementById('ml').innerText = 0;
            ml = 0;
        }
    
})


