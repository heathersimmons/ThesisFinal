//Animated scatterplot code and styling modified from http://bl.ocks.org/darrenjaworski/5544599

$(document).ready(function()	{
	
//bounding box, leave room for legend, title, etc.
	var margin = {
		top : 80,
		right : 100,
		bottom : 60,
		left : 10
	}, width = 725 - margin.left - margin.right, height = 600 - margin.top - margin.bottom;

//scales for axes
	var x = d3.scale.linear()
		.range([0, width]);
	
	var y = d3.scale.linear()
		.range([height, 0]);
	
	var padding = 2;

//append main div, positioned absolute
	var div = d3.select("body")
		.append("div")
			.attr("id", "info")
			.style("opacity", 0);
		
//add tooltips for more info on mouseover
	var tooltip = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

//create 6 colours for 6 product categories;
	var color = d3.scale.ordinal()
		.domain([1, 2, 3, 4, 5, 6])
		.range(["#323232","#9C855E","#AB211C","#5C8E76","5B87C6","1CA6AB"]);

//create variables for axes, no tick marks, position horizontally and vertically
	var xAxis = d3.svg.axis()
		.scale(x)
		.ticks(0)
		.orient("bottom");

	var yAxis = d3.svg.axis()
		.scale(y)
		.ticks(0)
		.orient("left");
		
//append chart, size varies according to size of screen
	var svg = d3.select("#chart")
		.append("svg")
			.attr("class", "chart")
			.attr("viewBox", "0 0 725 600")
			.attr("width", width + margin.left + margin.right)
			.attr("height", height + margin.top + margin.bottom)
			.append("g")
			.attr("transform", "translate(" + margin.left + "," + margin.top + ")");
			
//horizontal line through middle of chart						
	svg.append("line") 
	.attr("class","line")         // attach a line
    .style("stroke", "#323232")  // colour the line
    .attr("x1", 0)     // x position of the first end of the line
    .attr("y1", height/2)      // y position of the first end of the line
    .attr("x2", width)     // x position of the second end of the line
    .attr("y2", height/2);    // y position of the second end of the line
	
//vertical line through middle of chart			
	svg.append("line") 
	.attr("class","line")         // attach a line
    .style("stroke", "#323232")  // colour the line
    .attr("x1", width/2)     // x position of the first end of the line
    .attr("y1", height-height)      // y position of the first end of the line
    .attr("x2", width/2)     // x position of the second end of the line
    .attr("y2", height);    // y position of the second end of the line
			

	d3.csv("acquire.csv", function(error, data) {

//set axes length
		x.domain([0, 30000]).nice();
		y.domain([0, 10000]).nice();

//append x axis with text label
		svg.append("g")
			.attr("class", "x axis")
			.attr("transform", "translate(0," + height + ")")
			.call(xAxis)
			.append("text")
				.attr("class", "label")
				.attr("x", width*.85)
				.attr("y", 50)
				.style("text-anchor", "end")
				.style("font-size","24px")
				.text("Degree of Difference from PC Business");

//text label for right hand box on x axis			
				svg.append("g")
				.append("text")
				.style("font-size","18px")
				.attr("class", "label")
				.attr("text-anchor", "end")
				.attr("x", width*.99)
				.attr("y", height*1.05)
				.text("High");
	
//text label for left hand box on x axis					
				svg.append("g")
				.append("text")
				.style("font-size","18px")
				.attr("class", "label")
				.attr("text-anchor", "end")
				.attr("x", width*.1)
				.attr("y", height*1.05)
				.text("Low");								

//append y axis with text label
				svg.append("g")
				.attr("class", "y axis")
				.call(yAxis)
				.append("text")
				.style("font-size","24px")
				.attr("class", "label")
				.attr("text-anchor", "middle")
				.attr("transform", "translate("+ (padding*-10) +","+(height/2)+")rotate(-90)")
				.attr("y", -45)
				.attr("dy", ".71em")
				.text("Complexity ($ and People Required)");
				
//text label for upper box on y axis				
				svg.append("g")
				.append("text")
				.style("font-size","18px")
				.attr("class", "label")
				.attr("text-anchor", "end")
				.attr("transform", "rotate(-90)")
				.attr("y", -25)
				.attr("dy", ".71em")
				.text("High");

//text label for lower box on y axis				
				svg.append("g")
				.append("text")
				.style("font-size","18px")
				.attr("class", "label")
				.attr("text-anchor", "end")
				.attr("transform", "translate("+ (padding/2) +","+(height*.9)+")rotate(-90)")
				.attr("y", -25)
				.attr("dy", ".71em")
				.text("Low");
				
//chart title
				
		svg.append("text")
			.attr("x", width/4)
			.attr("y", height*-.1)
			.text("Dell Acquisitions 2008-2014")
			.style("font-size", "36px");

//text for each quadrant, all faded slightly so that acquisitions "pop"				
		svg.append("text")
			.attr("x", width/7)
			.attr("y", .2*height)
			.text("Sustaining")
			.style("font-size", "24px")
			.style("opacity", .4);

		svg.append("text")
			.attr("x", width/7)
			.attr("y", .27*height)
			.text("Innovations")
			.style("font-size", "24px")
			.style("opacity", .4);

		svg.append("text")
			.attr("x", width/1.5)
			.attr("y", .27*height)
			.text("Game Changers")
			.style("font-size", "24px")
			.style("opacity", .4);

		svg.append("text")
			.attr("x", width/1.5)
			.attr("y", .75*height)
			.text("Seeds of")
			.style("font-size", "24px")
			.style("opacity", .4);
			
		svg.append("text")
			.attr("x", width/1.5)
			.attr("y", .82*height)
			.text("Disruption")
			.style("font-size", "24px")
			.style("opacity", .4);

		svg.append("text")
			.attr("x", width/7)
			.attr("y", .75*height)
			.text("Short Putts")
			.style("font-size", "24px")
			.style("opacity", .4);	
		
//set legend x and y position
		
		var LYP = 30, 
			LXP = 675;
			
//create "Product Type" legend, colors, and legend title
			
		svg.append("text")
			.attr("class", "label")
			.attr("x", LXP - 5)
			.attr("y", LYP)
			.text("Product Type")
			.style("font-weight", "bold")
			.style("font-size", "18px");

		svg.append("circle")
			.attr("cx", LXP)
			.attr("cy", LYP + 20)
			.attr("r", 12)
			.style("fill", "#323232")
			.attr("stroke", "#000");
			
		svg.append("text")
			.attr("class", "label")
			.attr("x", LXP + 15)
			.attr("y", LYP + 25)
			.style("text-anchor", "start")
			.text(function(d) {
			return "Big Data";
			});
		
		svg.append("circle")
			.attr("cx", LXP)
			.attr("cy", LYP + 50)
			.attr("r", 12)
			.style("fill", "#9C855E")
			.attr("stroke", "#000");
			
		svg.append("text")
			.attr("class", "label")
			.attr("x", LXP + 15)
			.attr("y", LYP + 55)
			.style("text-anchor", "start")
			.text(function(d) {
			return "Security";
		});
		
		svg.append("circle")
			.attr("cx", LXP)
			.attr("cy", LYP + 80)
			.attr("r", 12)
			.style("fill", "#AB211C")
			.attr("stroke", "#000");
			
		svg.append("text")
			.attr("class", "label")
			.attr("x", LXP + 15)
			.attr("y", LYP + 85)
			.style("text-anchor", "start")
			.text(function(d) {
			return "Cloud Services";
		});
		
		svg.append("circle")
			.attr("cx", LXP)
			.attr("cy", LYP + 110)
			.attr("r", 12)
			.style("fill", "#5C8E76")
			.attr("stroke", "#000");
			
		svg.append("text")
			.attr("class", "label")
			.attr("x", LXP + 15)
			.attr("y", LYP + 115)
			.style("text-anchor", "start")
			.text(function(d) {
			return "Enterprise Solutions";
		});
		
		svg.append("circle")
			.attr("cx", LXP)
			.attr("cy", LYP + 140)
			.attr("r", 12)
			.style("fill", "#5B87C6")
			.attr("stroke", "#000");
			
		svg.append("text")
			.attr("class", "label")
			.attr("x", LXP + 15)
			.attr("y", LYP + 145)
			.style("text-anchor", "start")
			.text(function(d) {
			return "Mobility";
		});
		
		svg.append("circle")
			.attr("cx", LXP)
			.attr("cy", LYP + 170)
			.attr("r", 12)
			.style("fill", "#1CA6AB")
			.attr("stroke", "#000");
			
		svg.append("text")
			.attr("class", "label")
			.attr("x", LXP + 15)
			.attr("y", LYP + 175)
			.style("text-anchor", "start")
			.text(function(d) {
			return "Software";
		});
				
		svg.append("text")
			.attr("class", "label")
			.attr("x", LXP - 5)
			.attr("y", LYP + 220)
			.text("Deal Size")
			.style("font-weight", "bold")
			.style("font-size","18px");

//create "Deal Size" legend

		svg.append("circle")
			.attr("cx", LXP)
			.attr("cy", LYP + 30 + 220)
			.attr("r", 20)
			.style("fill", "#bbb")
			.attr("stroke", "#000");
			
		svg.append("text")
			.attr("class", "label")
			.attr("x", LXP + 25)
			.attr("y", LYP + 250)
			.style("text-anchor", "start")
			.text(">$1B");
			
		svg.append("circle")
			.attr("cx", LXP)
			.attr("cy", LYP + 70 + 220)
			.attr("r", 15)
			.style("fill", "#bbb")
			.attr("stroke", "#000");
			
		svg.append("text")
			.attr("class", "label")
			.attr("x", LXP + 25)
			.attr("y", LYP + 290)
			.style("text-anchor", "start")
			.text("$500M to $1B");
			
		svg.append("circle")
			.attr("cx", LXP)
			.attr("cy", LYP + 110 + 210)
			.attr("r", 9)
			.style("fill", "#bbb")
			.attr("stroke", "#000");
			
		svg.append("text")
			.attr("class", "label")
			.attr("x", LXP + 25)
			.attr("y", LYP + 320)
			.style("text-anchor", "start")
			.text("<$500M");
		
	//create circles for each acquisition
		svg.selectAll(".dot")
			.data(data.sort(
				function(a, b) {
					return b.DealSize - a.DealSize;
				}))
			.enter()
			.append("circle")
				.attr("class", "dot")
				.attr("r", 
					function(d) {
						return (4 + (d.DealSize * .0006));
					})//gave it a base of 4 plus size proportional to deal size
				.attr("cx", 
					function(d) {
						return x(d.Dif1);//x position based on degree of difference to current biz
					})
				.attr("cy", 
					function(d) {
						return y(d.Com1);//y position based on complexity
					})
					
				//color dot based on product type	
				.style("fill", 
					function(d) {
						if (d.type == 1) {
							return "#323232";
						} else if (d.type == 2) {
							return "#9C855E";
						} else if (d.type == 3) {
							return "#AB211C";	
						} else if (d.type == 4) {
							return "#5C8E76";	
						} else if (d.type == 5) {
							return "#5B87C6";		
						} else {
							return "#1CA6AB";
						}
					})
					
					//show tooltip on mouseover of dot
					.on("mouseover", function(d) {
          				tooltip.transition()
               		.duration(200)
               		.style("opacity", .9);
          				tooltip.html(d["name"])
               		.style("left", (d3.event.pageX + 5) + "px")
               		.style("top", (d3.event.pageY - 28) + "px");
      					})
      
	  					//fade tooltip on mouseover of dot
	  					.on("mouseout", function(d) {
          				tooltip.transition()
               		.duration(500)
               		.style("opacity", 0);
      					}); //end dot creation and associated mouseover and mouseout
	  	 
		//set minimum and maximum steps for slider, slider button title, and timer interval		
		
		var running = false;
		var timer;
		
		$("button").on("click", function() {
		
			var duration = 600,
				maxstep = 2014,
				minstep = 2008;
			
			if (running == true) {
			
				$("button").html("Play");
				running = false;
				clearInterval(timer);
				
			}//end of "true" branch
			
			else if (running == false) {
			
				$("button").html("Pause");
				
				sliderValue = $("#slider").val();
				
				timer = setInterval( function(){
						if (sliderValue < maxstep){
							sliderValue++;
							$("#slider").val(sliderValue);
							$('#range').html(sliderValue);
						}
						$("#slider").val(sliderValue);
						update();
					
				}, duration);
				running = true;				
				
			}//end of "false" branch

		});//end of button "on click" function
	
		$("#slider").on("change", function(){
			update();
			$("#range").html($("#slider").val());
			clearInterval(timer);
			$("button").html("Play");
		});
	
		update = function() {
		
			d3.selectAll(".dot")
			//position "complexity" or Y attribute by year
				.transition()
				.duration(600)
				.ease("linear")
				.attr("cy",function(d) {
			
					switch ($("#slider").val()) {
						case "2008":
							return y(d.Com1);
							break;
						case "2009":
							return y(d.Com2);
							break;
						case "2010":
							return y(d.Com3);
							break;
						case "2011":
							return y(d.Com4);
							break;
						case "2012":
							return y(d.Com5);
							break;
						case "2013":
							return y(d.Com6);
							break;
						case "2014":
							return y(d.Com7);
							break;
					}//end of switch
				})//end of function that moves dots up onto chart canvas by changing y attribute
				
				//position "degree of difference" or X attribute by year
				.transition()
				.duration(600)
				.ease("linear")
				.attr("cx",function(d) {
					switch ($("#slider").val()) {
						case "2008":
							return x(d.Dif1);
							break;
						case "2009":
							return x(d.Dif2);
							break;
						case "2010":
							return x(d.Dif3);
							break;
						case "2011":
							return x(d.Dif4);
							break;
						case "2012":
							return x(d.Dif5);
							break;
						case "2013":
							return x(d.Dif6);
							break;
						case "2014":
							return x(d.Dif7);
							break;
					}//end of switch
				});//end of function that positions dots based on x attribute
		};//end of dot positioning function "update"
		
	});//end of d3.csv function

});//end of document ready function





	
