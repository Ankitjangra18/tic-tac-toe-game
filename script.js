let boxes = document.querySelectorAll(".boxes");
let resetbtn = document.querySelector("#resetbtn");
let turn0 = true;
let newbtn = document.querySelector("#newbtn");
let msg = document.querySelector(".msg");
let hidden_msg = document.querySelector(".hide");
let msg_container = document.querySelector(".msgcontainer")
let boxhide = document.querySelector(".gamecontainer")
let winpattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
];
const enablebtn = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}
const resetgame = () => {
    turn0 = true;
    enablebtn()
    msg_container.classList.add("hide")
    boxhide.classList.remove("hide")

}
boxes.forEach((boxes) => {
    boxes.addEventListener("click", () => {
        if (turn0) {
            boxes.innerText = "0";
            turn0 = false;
        }
        else {
            boxes.innerText = "X";
            turn0 = true;
        }
        boxes.disabled = true;
        check_winner();
    });
});
const check_winner = () => {
    for (let pattern of winpattern) {
        console.log
            (
                boxes[pattern[0]].innerText,
                boxes[pattern[1]].innerText,
                boxes[pattern[2]].innerText
            );
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                winner(pos1)
                hiden()
            }
        }

    }
}
const winner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msg_container.classList.remove("hide");
    boxhide.classList.add("hide")
    disablebtn();
}
const disablebtn = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
resetbtn.addEventListener("click", resetgame)
newbtn.addEventListener("click", resetgame)
