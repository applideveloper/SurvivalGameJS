#pragma strict

function OnCollisitionEnter(info: Collision) {
	if (info.gameObject.tag == "Player") {
		info.gameObject.SendMessage("ApplyDamage");
	}
}

/*
function Start () {

}

function Update () {

}
*/