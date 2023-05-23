function show(menu) {
    var content = document.getElementById('content');
    switch(menu) {
        case 'weight':
            content.innerHTML = `
                <h2>Weight-Based Dosage Calculation</h2>
                <form onsubmit="event.preventDefault(); calculateWeightBasedDosage();">
                    <label for="weight">Weight (kg):</label><br>
                    <input type="number" id="weight" name="weight" required><br>
                    <label for="dosagePerWeight">Dosage per Weight Unit (mg/kg):</label><br>
                    <input type="number" id="dosagePerWeight" name="dosagePerWeight" required><br>
                    <input type="submit" value="Calculate">
                </form>
                <p id="weightResult"></p>
            `;
            break;
        case 'bsa':
            content.innerHTML = `
                <h2>BSA Dosage Calculation</h2>
                <form onsubmit="event.preventDefault(); calculateBSADosage();">
                    <label for="height">Height (cm):</label><br>
                    <input type="number" id="height" name="height" required><br>
                    <label for="weight">Weight (kg):</label><br>
                    <input typeI apologize for the cutoff. Here's the continuation:
                    <input type="number" id="weight" name="weight" required><br>
                    <label for="dosagePerBSA">Dosage per BSA Unit (mg/m²):</label><br>
                    <input type="number" id="dosagePerBSA" name="dosagePerBSA" required><br>
                    <input type="submit" value="Calculate">
                </form>
                <p id="bsaResult"></p>
            `;
            break;
        case 'pediatric':
            content.innerHTML = `
                <h2>Pediatric Dosage Calculation</h2>
                <form onsubmit="event.preventDefault(); calculatePediatricDosage();">
                    <label for="weight">Weight (kg):</label><br>
                    <input type="number" id="weight" name="weight" required><br>
                    <label for="dosagePerWeight">Dosage per Weight Unit (mg/kg):</label><br>
                    <input type="number" id="dosagePerWeight" name="dosagePerWeight" required><br>
                    <input type="submit" value="Calculate">
                </form>
                <p id="pediatricResult"></p>
            `;
            break;
        case 'renal':
            content.innerHTML = `
                <h2>Renal Dosage Adjustment</h2>
                <form onsubmit="event.preventDefault(); calculateRenalDosage();">
                    <label for="age">Age (years):</label><br>
                    <input type="number" id="age" name="age" required><br>
                    <label for="weight">Weight (kg):</label><br>
                    <input type="number" id="weight" name="weight" required><br>
                    <label for="serumCreatinine">Serum Creatinine (mg/dL):</label><br>
                    <input type="number" id="serumCreatinine" name="serumCreatinine" required><br>
                    <label for="gender">Gender:</label><br>
                    <select id="gender" name="gender" required>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select><br>
                    <input type="submit" value="Calculate">
                </form>
                <p id="renalResult"></p>
            `;
            break;
        case 'disclaimer':
            content.innerHTML = `
                <h2>Disclaimer</h2>
                <p>Disclaimer:

                ขอบคุณที่พิจารณาใช้แอปพลิเคชันคำนวณเภสัชกรรมของผม ในฐานะเภสัชกรที่มุ่งมั่นที่จะให้บริการด้านสุขภาพที่ยอดเยี่ยม ผมออกแบบแอปพลิเคชันนี้เพื่อช่วยเหลือเพื่อนเภสัชกร ผู้ป่วย และผู้ที่ต้องการคำนวณเภสัชกรรมที่แม่นยำและสะดวกสบาย
                
                ด้วยความเข้าใจลึกซึ้งในความซับซ้อนของการให้ยา ปฏิกิริยาระหว่างยา และการเปลี่ยนแปลงในการใช้ยาที่เป็นประโยชน์ ผมได้สร้างแอปพลิเคชันนี้เพื่อให้การคำนวณเภสัชกรรมที่เชื่อถือได้และมีประสิทธิภาพสำหรับสถานการณ์ต่าง ๆ
                
                อย่างไรก็ตาม จำเป็นต้องทราบว่า แม้ว่าความพยายามทุกอย่างจะได้รับการทำให้แม่นยำในการคำนวณโดยแอปพลิเคชันนี้ แต่มันไม่สามารถแทนที่คำแนะนำทางการแพทย์จากมืออาชีพได้ การคำนวณที่สร้างขึ้นควรใช้เป็นเครื่องมืออ้างอิงและควรตรวจสอบในเอกสารเภสัชกรรมที่ได้รับการยอมรับและความเห็นของคลินิก
                
                นอกจากนี้ เนื่องจากวงการเภสัชกรรมเปลี่ยนแปลงอย่างต่อเนื่อง การปรับปรุงและพัฒนาอาจเกิดขึ้นที่สามารถมีผลต่อปริมาณยา นวทาง และข้อกำหนด แม้ว่าผมจะพยายามรักษาระดับความถูกต้องและข้อมูลที่อัพเดตของแอปพลิเคชัน ผมไม่สามารถรับประกันได้ว่าข้อมูลทั้งหมดจะเป็นปัจจุบันตลอดเวลา ผู้ใช้ต้องรับผิดชอบในการทราบข้อมูลล่าสุดและใช้วิจารณญาณของตนเองเมื่อใช้แอปพลิเคชันนี้
                
                ผมยินดีรับคำติชม ข้อเสนอแนะ หรือความกังวลเกี่ยวกับแอปพลิเคชัน โปรดอย่าลังเลที่จะติดต่อผมผ่านช่องทางการติดต่อภายในแอปพลิเคชัน ผมมุ่งมั่นที่จะสร้างความสมบูรณ์และความแม่นยำของเครื่องมือคำนวณเภสัชกรรมเพื่อให้เป็นแหล่งข้อมูลมูลค่าสำหรับชุมชนเภสัชกรรม
                
                ขอบคุณที่เลือกใช้แอปพลิเคชันคำนวณเภสัชกรรมของผม ผมหวังว่ามันจะเป็นเครื่องมือที่ไม่ควรหายไปในการปฏิบัติงานประจำวันของคุณ เพื่อให้คุณสามารถให้การดูแลเภสัชกรรมที่มีมาตรฐานสูงสุดแก่ผู้ป่วยของคุณได้อย่างเต็มที่.</p>
            `;
            break;
    }
}

function calculateWeightBasedDosage() {
    var weight = document.getElementById('weight').value;
    var dosagePerWeight = document.getElementById('dosagePerWeight').value;
    var result = weight * dosagePerWeight;
    document.getElementById('weightResult').innerText = "Calculated Dosage: " + result + " mg";
}

function calculateBSADosage() {
    var height = document.getElementById('height').value;
    var weight = document.getElementById('weight').value;
    var dosagePerBSA = document.getElementById('dosagePerBSA').value;
    var bsa = Math.sqrt((height * weight) / 3600);
    var result = bsa * dosagePerBSA;
    document.getElementById('bsaResult').innerText = "Calculated Dosage: " + result + " mg";
}

function calculatePediatricDosage() {
    var weight = document.getElementById('weight').value;
    var dosagePerWeight = document.getElementById('dosagePerWeight').value;
    var result = weight * dosagePerWeight;
    document.getElementById('pediatricResult').innerText = "Calculated Dosage: " + result + " mg";
}

function calculateRenalDosage() {
    var age = document.getElementById('age').value;
    var weight = document.getElementById('weight').value;
    var serumCreatinine = document.getElementById('serumCreatinine').value;
    var gender = document.getElementById('gender').value;
    var crCl = ((140 - age) * weight) / (72 * serumCreatinine);
    if (gender === 'female') {
        crCl *= 0.85;
    }
    document.getElementById('renalResult').innerText = "Creatinine Clearance: " + crCl + " mL/min";
}
