let times = 0;
load();

function load(){
    chrome.storage.local.get('times', function(result) {
        // console.log('times : ' + result.times);
        let storage_times = result.times;
        if(storage_times){
            alert("恭喜🎉！您已记录喝水"+storage_times+"次，加油！");
            document.getElementById('times').innerText = result.times;
            times =  result.times;
        }
        
      });
    
}

document.getElementById('drinked').addEventListener("click",function(){
    times++;
    document.getElementById('times').innerText = times;
    chrome.storage.local.set({times: times}, function() {
        // console.log('times saved.');
      });
})

document.getElementById('reset').addEventListener("click",function(){
    
        var r=confirm("确定要重置喝水记录？");
        if (r==true){
            chrome.storage.local.remove('times',function(){
                alert('重置成功');
            });
            document.getElementById('times').innerText = 0;
            times = 0;
        }
    
})
