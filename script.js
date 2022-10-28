let key1, key2;
let count = 1;
$(document).ready(function() {

    $("#ok").click(function(){
        if($("#key1").val() == "" || $("#key2").val() == "" || $("#key3").val() == "" || $("#key4").val() == "" || $("#key5").val() == "" || $("#key6").val() == ""){
            alert("Kalitlarni kiritishingiz kerak!");
        }else{
            key1 = parseInt($("#key1").val());
            key2 = parseInt($("#key2").val());
            $(".bir").hide();
            $("#box").show();
        }
    });

    // 1
       // plus button
       $("#add").click(function() {
        count++;
        $("#boxelement").append(
            `
            <div class="row mt-2">
                        <div class="col-4">
                            <input type="text" class="form-control en" id="${count}e" aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Soningiz" onkeyup="decrypt(this)">  
                        </div>
                        <div class="col-4">
                            <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" disabled value="decrypt=>">
                        </div>
                        <div class="col-4">
                            <input type="text" class="form-control ${count}e" aria-label="Small" aria-describedby="inputGroup-sizing-sm" disabled>
                        </div>
            </div>
            `
        )
    })
    // function

});

function decrypt(th){
    let number = parseInt(th.value);
    let id = th.id;

    let decrypted = Math.pow(number, key1)%key2;

    $("."+id).val(decrypted);
}