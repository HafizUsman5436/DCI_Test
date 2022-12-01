import { loginpage } from "./POM/LoginPage";
import { dashboard } from "./POM/Dashboard";
import { entries } from "./POM/Entries";
import LoginDetails from "../fixtures/LoginDetails.json";
import dayjs from "dayjs";

describe("DCI Automation Task", () => {
  beforeEach(() => {
    cy.visit("/");
    loginpage.LanguageEN().should("be.visible").select("English");
    loginpage
      .Username()
      .should("be.visible")
      .type(LoginDetails.Username, { log: false });
    loginpage
      .Password()
      .should("be.visible")
      .type(LoginDetails.Password, { log: false });
    loginpage.SignInButton().should("be.visible").click();
    cy.wait(3000);
  });
  it("Scenario # 1", () => {
    dashboard.EntriesNavBar().should("be.visible").click();

    var beforeCount;
    cy.get(".pad-b-5").children().eq(1).invoke("text").as("value");
    cy.get("@value").then((ele) => {
      beforeCount = ele;

      entries.ActionBtn().should("be.visible").click();
      entries.NewEntryBtn().should("be.visible").click();
      entries.ClientName().should("be.visible").click();
      entries.ClientName().type("Resh Client 1");
      entries.ClientNameId().click();
      cy.wait(3000);
      var StartTime = dayjs().subtract(5, "minutes").format("hh:mm a");
      var EndTime = dayjs().subtract(3, "minutes").format("hh:mm a");
      entries.PunchIn().should("be.visible").clear().type(StartTime);
      entries.PunchOut().should("be.visible").clear().type(EndTime);
      entries.DVVMethod().should("be.visible").select("Portal Signoff");
      entries.PlusIcon().should("be.visible").click();
      entries
        .SelectReason()
        .should("be.visible")
        .select("ReshSp - fob broke - FOB001");
      entries.NoteText().should("be.visible").type("QA Test");
      entries.AddReasonCOde().scrollIntoView().should("be.visible").click();
      entries.SubmitReasonCode().should("be.visible").click();
      cy.wait(1000);
      entries.GetCheckbox().should("be.visible").click();
      entries.SaveBtn().should("be.visible").click();
      entries.SubmitSavePunch().should("be.visible").click();
    });

    var afterCount;
    cy.get(".pad-b-5").children().eq(1).invoke("text").as("value");
    cy.get("@value").then((ele) => {
      afterCount = ele - 1;
      assert.equal(afterCount, beforeCount, "Entry Created");
    });
  });

  // Scenario # 2

  it("Scenario # 2", () => {
    dashboard.EntriesNavBar().should("be.visible").click();
    cy.wait(2000);
    entries.LatestEntry().click();
    entries.ActionBtn().should("be.visible").click();
    entries.NewNote().should("be.visible").click();
    entries.SelectNoteType().should("be.visible").select("Note");
    entries.SubjectNote().should("be.visible").type("QA Test ");
    entries.DescriptionNote().type("QA Automation Home Test");
    entries.SaveNoteBtn().click();
    entries.SubmitNoteConfirmation().click();
    entries.NoteTabClick().should("be.visible").click();
    entries.verifyNote().should("be.visible");
  });
});
