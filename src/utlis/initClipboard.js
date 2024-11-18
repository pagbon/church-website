import ClipboardJS from "clipboard";

const initClipboard = () => {
  var btnHtml =
    '<button type="button" class="btn btn-sm btn-white rounded-pill btn-clipboard">Copy</button>';

  document.querySelectorAll(".code-wrapper-inner").forEach(function (element) {
    // Check if a button already exists before adding a new one
    if (
      !element.previousElementSibling ||
      !element.previousElementSibling.classList.contains("btn-clipboard")
    ) {
      element.insertAdjacentHTML("beforebegin", btnHtml);
    }
  });
  var clipboard = new ClipboardJS(".btn-clipboard", {
    target: function (trigger) {
      return trigger.nextElementSibling;
    },
  });
  clipboard.on("success", (event) => {
    event.trigger.textContent = "Copied!";
    event.clearSelection();
    setTimeout(function () {
      event.trigger.textContent = "Copy";
    }, 2000);
  });
  var copyIconCode = new ClipboardJS(".btn-copy-icon");
  copyIconCode.on("success", function (event) {
    event.clearSelection();
    event.trigger.textContent = "Copied!";
    window.setTimeout(function () {
      event.trigger.textContent = "Copy";
    }, 2300);
  });
};

export default initClipboard;
