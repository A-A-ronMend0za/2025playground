var timeBlock = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];

generatePlannerBtn = () => {
  var plannerBtn = $("<i></i>")
    .addClass("menuBtn fa-solid fa-calendar-days")
    .click(
      (runGeneratePlanner = () => {
        contentDisplayEl.empty();
        // generatePlanner();
      })
    );

  menuBtnsEl.append(plannerBtn);
};
