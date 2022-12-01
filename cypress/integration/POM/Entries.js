export class Entries {
  ActionBtn() {
    return cy.get("#aActionButton");
  }
  NewEntryBtn() {
    return cy.get("#btnAddEmpTransaction");
  }
  ClientName() {
    return cy.get("#txtClientAccount");
  }
  PunchIn() {
    return cy.get("#PunchInTime");
  }
  PunchOut() {
    return cy.get("#PunchOutTime");
  }
  DVVMethod() {
    return cy.get("#drpEvvMethod");
  }
  PlusIcon() {
    return cy.get("#customReasonCode");
  }
  SelectReason() {
    return cy.get("#drpCustomReason");
  }
  NoteText() {
    return cy.get("#txtareaReasonNote");
  }
  AddReasonCOde() {
    return cy.get("#idAddCustomReason");
  }
  GetCheckbox() {
    return cy.get('[name="chkbox"]').eq(0);
  }
  SaveBtn() {
    return cy.get("#btnTrasactionPunchFormSubmit");
  }
  SubmitReasonCode() {
    return cy.get("#btnFormSubmitAddReasonModal");
  }
  ClientNameId() {
    return cy.contains("div", "Resh Client 1 - ResSP1475");
  }
  SubmitSavePunch() {
    return cy.get("#btnFormSubmitSavePunch");
  }

  getLastValue() {
    return cy.get("#TCount").invoke("value").as("text");
  }

  //Scenario # 2
  NewNote() {
    return cy.get("#btnAddAnnotation");
  }
  LatestEntry() {
    return cy.get("#tblPunches").find("a").eq(0);
  }
  SelectNoteType() {
    return cy.get("#AnnotationAnnotationType");
  }
  SubjectNote() {
    return cy.get("#AnnotationSubject");
  }
  SaveNoteBtn() {
    return cy.get("#btnFormSubmitAnnotation");
  }
  SubmitNoteConfirmation() {
    return cy.get("#btnFormSubmitAnnotationModal");
  }
  DescriptionNote() {
    return cy.get("iframe").then(($Iframe) => {
      const IframeContent = $Iframe.contents().find("body");
      cy.wrap(IframeContent);
    });
  }

  NoteTabClick() {
    return cy.get("#tabcontentnotes");
  }
  verifyNote() {
    return cy.contains("p", "QA Automation Home Test");
  }
}

export const entries = new Entries();
