function volume_sphere(e) {
    //Write your code here
	e.preventDefault()
	let radius=document.getElementById("radius").value;
	let volume=document.getElementById("volume");
	const vol=(4 / 3) * Math.PI * Math.pow(radius, 3);//Math.pow is usee for power we can also write in normal
	volume.value=vol.toFixed(4);
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
