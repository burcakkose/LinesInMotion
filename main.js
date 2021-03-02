var x, y, d, t, N;

function setup() {
    initializeFields();
    createCanvas(760, 760);
    //noStroke();
    //fill(220);
}

function draw() {
    
    stroke(0, 0, 0);
    fill(220);
    clear();
    
    t += .02;
    for (y = 0; y < 810; y += 90) 
    	for (x = 0; x < 810; x += 90) 
    		for (d = 0; d < TAU; d += PI / 8) 
    			curve(x, y, x + cos(d + t + (N = noise(x, y, t * .1) * 50)) * N, y + 
    				sin(d + t - N) * N, x - cos(d - t - N) * N, y - sin(d - t + N) * N, x, y);

}

function initializeFields() {
    x = 0;
    y = 0;
    d = 0;
    t = 0;
    N = 0;
}