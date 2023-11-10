import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { UiComponent } from "./ui.component";
import { FormsModule } from "@angular/forms";
import { By } from "@angular/platform-browser";

describe("Ui Addition - Component", () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UiComponent],
      imports: [FormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Factorial
  it("Should call factorial method", () => {
    // Arrange
    let result = 0;
    component.operando1 = 5;
    // Act
    component.calcularFactorial();
    result = component.resultado;
    // Assert
    expect(result).toBe(120);
  });

  it("Should add operator1 when i click the factorial button ", () => {
    // Arrange
    component.operando1 = 5;

    let additionButton = fixture.debugElement.query(
      By.css(".factorial-button")
    );

    // Act
    additionButton.triggerEventHandler("click", null);

    // Assert
    expect(component.resultado).toBe(120);
  });

  it("Should render factorial in result div", () => {
    // Arrange
    component.operando1 = 5;

    // Act
    component.calcularFactorial();
    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css(".resultado"));
    let el: HTMLElement = de.nativeElement;

    // Assert
    expect(el.innerText).toContain("120");
  });

  // Logaritmo
  it("Should call logaritmonatural method", () => {
    // Arrange
    let result = 0;
    component.operando1 = 10;
    // Act
    component.calcularLogaritmoNatural();
    result = component.resultado;
    // Assert
    expect(result).toBe(2.302585092994046);
  });

  it("Should add operator1 when i click the logaritmo button ", () => {
    // Arrange
    component.operando1 = 10;

    let additionButton = fixture.debugElement.query(
      By.css(".logaritmo-button")
    );

    // Act
    additionButton.triggerEventHandler("click", null);

    // Assert
    expect(component.resultado).toBe(2.302585092994046);
  });

  it("Should render logaritmo in result div", () => {
    // Arrange
    component.operando1 = 10;

    // Act
    component.calcularLogaritmoNatural();
    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css(".resultado"));
    let el: HTMLElement = de.nativeElement;

    // Assert
    expect(el.innerText).toContain("2.302585092994046");
  });

  // Logaritmo base 10
  it("Should call logaritmobase10 method", () => {
    // Arrange
    let result = 0;
    component.operando1 = 10;
    // Act
    component.calcularLogaritmoBase10();
    result = component.resultado;
    // Assert
    expect(result).toBe(1);
  });

  it("Should add operator1 when i click the base button ", () => {
    // Arrange
    component.operando1 = 10;

    let additionButton = fixture.debugElement.query(By.css(".base-button"));

    // Act
    additionButton.triggerEventHandler("click", null);

    // Assert
    expect(component.resultado).toBe(1);
  });

  it("Should render logairmobase10 in result div", () => {
    // Arrange
    component.operando1 = 10;

    // Act
    component.calcularLogaritmoBase10();
    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css(".resultado"));
    let el: HTMLElement = de.nativeElement;

    // Assert
    expect(el.innerText).toContain("1");
  });

  // Porcentaje
  it("Should call Porcentaje method", () => {
    // Arrange
    let result = 0;
    component.operando1 = 10;
    component.operando2 = 200;
    // Act
    component.calcularPorcentaje();
    result = component.resultado;
    // Assert
    expect(result).toBe(20);
  });

  it("Should add operator1 when i click the porcentaje button ", () => {
    // Arrange
    component.operando1 = 10;
    component.operando2 = 200;

    let additionButton = fixture.debugElement.query(
      By.css(".porcentaje-button")
    );

    // Act
    additionButton.triggerEventHandler("click", null);

    // Assert
    expect(component.resultado).toBe(20);
  });

  it("Should render porcentaje in result div", () => {
    // Arrange
    component.operando1 = 10;
    component.operando2 = 200;

    // Act
    component.calcularPorcentaje();
    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css(".resultado"));
    let el: HTMLElement = de.nativeElement;

    // Assert
    expect(el.innerText).toContain("20");
  });

  // raiz
  it("Should call raiz method", () => {
    // Arrange
    let result = 0;
    component.operando1 = 5;
    component.operando2 = 200;
    // Act
    component.calcularRaiz();
    result = component.resultado;
    // Assert
    expect(result).toBe(1.0080796552194304);
  });

  it("Should add operator1 when i click the raiz button ", () => {
    // Arrange
    component.operando1 = 5;
    component.operando2 = 200;

    let additionButton = fixture.debugElement.query(By.css(".raiz-button"));

    // Act
    additionButton.triggerEventHandler("click", null);

    // Assert
    expect(component.resultado).toBe(1.0080796552194304);
  });

  it("Should render raiz result in div", () => {
    // Arrange
    component.operando1 = 5;
    component.operando2 = 200;

    // Act
    component.calcularRaiz();
    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css(".resultado"));
    let el: HTMLElement = de.nativeElement;

    // Assert
    expect(el.innerText).toContain("1.0080796552194304");
  });
});
