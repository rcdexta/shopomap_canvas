var graph = new Graph();
	
	var nodeA = new Graph.Node(760,267,"A");
	var nodeB = new Graph.Node(670,267,"B");
	var nodeC = new Graph.Node(670,37,"C");
	var nodeD = new Graph.Node(670,572,"D");
	var nodeE = new Graph.Node(160,267,"E");
	var nodeF = new Graph.Node(30,267,"F");
	var nodeG = new Graph.Node(160,147,"G");
	var nodeH = new Graph.Node(300,147,"H");
	var nodeI = new Graph.Node(30,147,"I");
	var nodeJ = new Graph.Node(160,37,"J");
	var nodeK = new Graph.Node(160,370,"K");
	var nodeL = new Graph.Node(30,370,"L");
	var nodeM = new Graph.Node(300,370,"M");
	var nodeN = new Graph.Node(160,474,"N");
	var nodeO = new Graph.Node(30,474,"O");
	var nodeP = new Graph.Node(300,474,"P");
	var nodeQ = new Graph.Node(160,572,"Q");

	graph.addNode(nodeA);
	graph.addNode(nodeB);
	graph.addNode(nodeC);
	graph.addNode(nodeD);
	graph.addNode(nodeE);
	graph.addNode(nodeF);
	graph.addNode(nodeG);
	graph.addNode(nodeH);
	graph.addNode(nodeI);
	graph.addNode(nodeJ);
	graph.addNode(nodeK);
	graph.addNode(nodeL);
	graph.addNode(nodeM);
	graph.addNode(nodeN);
	graph.addNode(nodeO);
	graph.addNode(nodeP);
	graph.addNode(nodeQ);
	
	nodeA.addEdges([nodeB]);
	nodeB.addEdges([nodeD, nodeC, nodeE]);
	nodeE.addEdges([nodeF, nodeG, nodeK]);
	nodeG.addEdges([nodeI, nodeH, nodeJ]);
	nodeK.addEdges([nodeL, nodeM, nodeN]);
	nodeN.addEdges([nodeO, nodeP, nodeQ]);
	
	
	