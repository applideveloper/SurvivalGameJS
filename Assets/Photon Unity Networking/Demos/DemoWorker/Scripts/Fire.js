#pragma strict

var bullet : Rigidbody;
var speed = 20;

function Update() {
	if (Input.GetButtonUp("Fire1")) {
		var clone = Instantiate(bullet, transform.position, transform.rotation);
		clone.velocity = transform.TransformDirection(Vector3(0,0,speed));
		Destroy(clone.gameObject, 3);
	}
}

/*
function Start () {

}

function Update () {

}
*/