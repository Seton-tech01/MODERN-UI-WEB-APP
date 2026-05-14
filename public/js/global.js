function sum(firstNumber, secondNumber) {
  return (result = firstNumber + secondNumber);
}

function toggleDiv(id, show) {
	const el = document.getElementById(id);
	el.style.display = show ? "flex" : "none";
}

function quadraticFormula(a, b, c) {
  let d = b ** 2 - 4 * a * c;

  let x1 = (-b + Math.sqrt(d)) / (2 * a);
  let x2 = (-b - Math.sqrt(d)) / (2 * a);
  return `${x1} , ${x2}`;
}

//header functions
function header() {
  return `
    <header>
      	<div class="header-in">
        	<div class="logo-div">
             	 <a href="#" class="logo" title="Logo">
                	<img src="./public/all-images/images/logo.png" alt="Logo">
              	</a>
          	</div>

          	<nav>
              	<ul>
					<li title="Home"><a href="#">Home</a></li>
					<li title="About"><a href="#">About</a></li>
					<li title="Services"><a href="#">Services</a></li>
					<li title="Products"><a href="#">Products</a></li>
					<li title="Contact"><a href="#">Contact</a></li>
              	</ul>
          	</nav>

      </div>
    </header>`;
}

//footer function
function footer() {
  return `
    <footer>
      	<div class="footer-in">
			<div class="top-info" id="calc">
				${input({
					id: "a",
					placeholder: "First number"
				})}

				${input({
					id: "b",
					placeholder: "Second number"
				})}

				${input({
					id: "c",
					placeholder: "Third number"
				})}	

				${button({				
					text: "Submit",
					onClick: "inputQuadratic()"
				})}

				${input( {
					id: "result",
					placeholder: "Result"
				})}
			</div>

        	<div class="bottom-info">
				<div>
					<p>© 2026 Cease Fire Tech. All rights reserved.</p>
				</div>

				<div>
					<button class="button">Privacy Policy</button>
					<span>|</span>
					<button class="button">Terms of Service</button>
					<button class="button"><i class="bi bi-lock-fill"></i> Admin
						Access</button>
				</div>
        	</div>
    	</div>
  	</footer>`;
}
