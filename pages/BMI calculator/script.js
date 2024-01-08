let button = document.getElementById('btn');

button.addEventListener('click', () => {
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    const result = document.getElementById('output');
    let height_status=false, weight_status=false;

    if(height === '' || isNaN(height) || (height <= 0)){
        document.getElementById('height_error').innerHTML = 'Please provide a valid height';
    }else{
        document.getElementById('height_error').innerHTML = '';
        height_status=true;
    }

    if(weight === '' || isNaN(weight) || (weight <= 0)){
        document.getElementById('weight_error').innerHTML = 'Please provide a valid weight';
    }else{
        document.getElementById('weight_error').innerHTML = '';
        weight_status=true;
    }

    if(height_status && weight_status){
        const bmi = (weight / ((height*height)/10000)).toFixed(2);

        if(bmi < 18.6){
            result.innerHTML = 'Under weight : ' + bmi;
        }else if(bmi >= 18.6 && bmi < 24.9){
            result.innerHTML = 'Normal : ' + bmi;
        }else{
            result.innerHTML = 'Over weight : ' + bmi;
        }
    }else{
        alert('The form has errors');
        result.innerHTML = '';
    }
    document.getElementById('btn').addEventListener('click', function() {
        var height = parseFloat(document.getElementById('height').value);
        var weight = parseFloat(document.getElementById('weight').value);
        var genderMale = document.getElementById('male').checked;
        var genderFemale = document.getElementById('female').checked;
        var activeLifestyle = document.getElementById('active').checked;
        var sedentaryLifestyle = document.getElementById('sedentary').checked;
        var genderError = document.getElementById('gender_error');
        if (!genderMale && !genderFemale) {
            genderError.textContent = 'Please select gender';
            genderError.style.color = 'red';
            return; 
        } else {
            genderError.textContent = ''; 
        }
    
        
        var lifestyleError = document.getElementById('lifestyle_error');
        if (!activeLifestyle && !sedentaryLifestyle) {
            lifestyleError.textContent = 'Please select at least one lifestyle';
            lifestyleError.style.color = 'red';
            return;
        } else {
            lifestyleError.textContent = ''; 
        }
    
    });
    document.getElementById('btn').addEventListener('click', function() {
        var height = document.getElementById('height').value;
        var weight = document.getElementById('weight').value;
        var gender = document.querySelector('input[name="gender"]:checked');
        var lifestyleCheckboxes = document.querySelectorAll('input[name="lifestyle"]:checked');
    
      
        output.innerHTML += '<p>Height: ' + height + ' CM</p>';
        output.innerHTML += '<p>Weight: ' + weight + ' KG</p>';
    
        if (gender) {
            output.innerHTML += '<p>Gender: ' + gender.value + '</p>';
        }
    
        if (lifestyleCheckboxes.length > 0) {
            output.innerHTML += '<p>Lifestyle: ';
            lifestyleCheckboxes.forEach(function(checkbox) {
                output.innerHTML += checkbox.value + ' ';
            });
            output.innerHTML += '</p>';
        }
    });
    
});