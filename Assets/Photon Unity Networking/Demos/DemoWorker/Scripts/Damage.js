#pragma strict

var explosionPrefab : GameObject;

function ApplyDamage() {
	Instantiate(explosionPrefab, transform.position, Quaternion.identity);
	Destroy(gameObject);
	Application.LoadLevel(Application.loadedLevel);
}

/*
function Start () {

}

function Update () {

}
*/