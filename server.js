document.addEventListener("DOMContentLoaded", function () {
  const voteButton = document.getElementById("voteButton");
  const result = document.getElementById("result");
  const electionsDropdown = document.getElementById("elections");
  const candidatesDropdown = document.getElementById("candidates");

  // Fetch elections and candidates from the server and populate the dropdowns

  voteButton.addEventListener("click", function () {
      const selectedElection = electionsDropdown.value;
      const selectedCandidate = candidatesDropdown.value;

      if (selectedElection && selectedCandidate) {
          // Send the vote to the server for processing
          // Display a confirmation message in result
      } else {
          result.textContent = "Please select an election and candidate to vote.";
      }
  });
});
