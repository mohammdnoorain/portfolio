import React, { useState } from "react";
import ImageSlider from "./ImageSlider";
const WorkDevops = () => {
  const [activeBox, setActiveBox] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  
  const images = [
    '/assets/img1.png',
    '/assets/img2.png',
    '/assets/img3.png',
    '/assets/img4.png'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };


  const boxes = [
    {
      title: "Python Scripts",
      items: [
        {
          name: "1. Increase Jenkins Master Node Speed",
          content: (
            <div>
              <p># Python script to increase the jenkins master node</p>
              <p>
                 step-1: connect with your jenkins master node server through ssh or other ways </p>
                <p>
                 step-2: go to root directory,</p>
              <p>step-3: run this python script by creating a python file with extention .py  
                 step-4: run python3 pythonScript1.py
              </p>
 
              <img src={require('../assets/p1.png')} alt="Jenkins Automation" className="my-4 w-full rounded-md" />
            </div>
          ),
        },
        {
          name: "2. Data Processing",
          content: <p># Python script for data processing</p>,
        },
      ],
    },

    {
      title: "Bash Scripts",
      items: [
        { name: "Sonarqube Setup", content: (
          

          <div className="p-6 bg-gray-800 text-white rounded-xl shadow-lg">
           <h1>SonarQube Installation Script</h1>
           <code>

<p>#!/bin/bash</p>

<p>cp /etc/sysctl.conf /root/sysctl.conf_backup</p>
<p>cat &lt;&lt;EOT&gt; /etc/sysctl.conf</p>
<p>vm.max_map_count=262144</p>
<p>fs.file-max=65536</p>
<p>ulimit -n 65536</p>
<p>ulimit -u 4096</p>
<p>EOT</p>

<p>cp /etc/security/limits.conf /root/sec_limit.conf_backup</p>
<p>ccat &lt;&lt;EOT&gt; /etc/security/limits.conf</p>
<p>sonarqube   -   nofile   65536</p>
<p>sonarqube   -   nproc    409</p>
<p>EOT</p>

<h2>Install Java</h2>
<p>sudo apt-get update -y</p>
<p>sudo apt-get install openjdk-17-jdk -y</p>
<p>sudo update-alternatives --config java</p>
<p>java -version</p>

<h2>Install PostgreSQL</h2>
<p>sudo apt update</p>
<p>wget -q https://www.postgresql.org/media/keys/ACCC4CF8.asc -O - | sudo apt-key add -</p>
<p>sudo sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt/ `lsb_release -cs`-pgdg main" >> /etc/apt/sources.list.d/pgdg.list'</p>
<p>sudo apt install postgresql postgresql-contrib -y</p>
<p>sudo systemctl enable postgresql.service</p>
<p>sudo systemctl start  postgresql.service</p>
<p>sudo echo "postgres:admin123" | chpasswd</p>
<p>runuser -l postgres -c "createuser sonar"</p>
<p>sudo -i -u postgres psql -c "ALTER USER sonar WITH ENCRYPTED PASSWORD 'admin123';"</p>
<p>sudo -i -u postgres psql -c "CREATE DATABASE sonarqube OWNER sonar;"</p>
<p>sudo -i -u postgres psql -c "GRANT ALL PRIVILEGES ON DATABASE sonarqube to sonar;"</p>
<p>systemctl restart  postgresql</p>
<p>netstat -tulpena | grep postgres</p>

<h2>Download and Configure SonarQube</h2>
<p>sudo mkdir -p /sonarqube/</p>
<p>cd /sonarqube/</p>
<p>sudo curl -O https://binaries.sonarsource.com/Distribution/sonarqube/sonarqube-9.9.7.96285.zip</p>
<p>sudo apt-get install zip -y</p>
<p>sudo unzip -o sonarqube-9.9.7.96285.zip -d /opt/</p>
<p>sudo mv /opt/sonarqube-9.9.7.96285/ /opt/sonarqube</p>
<p>sudo groupadd sonar</p>
<p>sudo useradd -c "SonarQube - User" -d /opt/sonarqube/ -g sonar sonar</p>
<p>sudo chown sonar:sonar /opt/sonarqube/ -R</p>

<p>cp /opt/sonarqube/conf/sonar.properties /root/sonar.properties_backup</p>
<p>cat &lt;&lt;EOT&gt; /opt/sonarqube/conf/sonar.properties</p>
<p>sonar.jdbc.username=sonar</p>
<p>sonar.jdbc.password=admin123</p>
<p>sonar.jdbc.url=jdbc:postgresql://localhost/sonarqube</p>
<p>sonar.web.host=0.0.0.0</p>
<p>sonar.web.port=9000</p>
<p>sonar.web.javaAdditionalOpts=-server</p>
<p>sonar.search.javaOpts=-Xmx512m -Xms512m -XX:+HeapDumpOnOutOfMemoryError</p>
<p>sonar.log.level=INFO</p>
<p>sonar.path.logs=logs</p>
<p>EOT</p>

<h2>Create SonarQube Service</h2>
<p>cat &lt;&lt;EOT&gt; /etc/systemd/system/sonarqube.service</p>
<p>[Unit]</p>
<p>Description=SonarQube service</p>
<p>After=syslog.target network.target</p>
<p>[Service]</p>
<p>Type=forking</p>
<p>ExecStart=/opt/sonarqube/bin/linux-x86-64/sonar.sh start</p>
<p>ExecStop=/opt/sonarqube/bin/linux-x86-64/sonar.sh stop</p>
<p>User=sonar</p>
<p>Group=sonar</p>
<p>Restart=always</p>
<p>LimitNOFILE=65536</p>
<p>LimitNPROC=4096</p>
<p>[Install]</p>
<p>WantedBy=multi-user.target</p>
<p>EOT</p>

<p>systemctl daemon-reload</p>
<p>systemctl enable sonarqube.service</p>

<h2>Install Nginx</h2>
<p>apt-get install nginx -y</p>
<p>rm -rf /etc/nginx/sites-enabled/default</p>
<p>rm -rf /etc/nginx/sites-available/default</p>

<p>cat &lt;&lt;EOT&gt; /etc/nginx/sites-available/sonarqube</p>
<p>server</p>
<p>    listen      80;</p>
<p>    server_name sonarqube.groophy.in;</p>
<p>    access_log  /var/log/nginx/sonar.access.log;</p>
<p>    error_log   /var/log/nginx/sonar.error.log;</p>
<p>    proxy_buffers 16 64k;</p>
<p>    proxy_buffer_size 128k;</p>
<p>    location / </p>
<p>        proxy_pass  http://127.0.0.1:9000;</p>
<p>        proxy_next_upstream error timeout invalid_header http_500 http_502 http_503 http_504;</p>
<p>        proxy_redirect off;</p>
<p>        proxy_set_header    Host            \$host;</p>
<p>        proxy_set_header    X-Real-IP       \$remote_addr;</p>
<p>        proxy_set_header    X-Forwarded-For \$proxy_add_x_forwarded_for;</p>
<p>        proxy_set_header    X-Forwarded-Proto http;</p>
<p>    

</p>
<p>

</p>
<p>EOT</p>

<p>ln -s /etc/nginx/sites-available/sonarqube /etc/nginx/sites-enabled/sonarqube</p>
<p>systemctl enable nginx.service</p>
<p>sudo ufw allow 80,9000,9001/tcp</p>

<h2>Reboot System</h2>
<p>echo "System reboot in 30 sec"</p>
<p>sleep 30</p>
<p>reboot</p>

            
</code>
          </div>
        )
        },
        { name: "Nexus Setup", content: (
          <div>
          
            <div className="p-6 bg-gray-800 text-white rounded-xl shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Nexus Setup</h1>
      <p className="mb-2">#!/bin/bash</p>
      <p>sudo rpm --import https://yum.corretto.aws/corretto.key</p>
      <p>sudo curl -L -o /etc/yum.repos.d/corretto.repo https://yum.corretto.aws/corretto.repo</p>
      <p>sudo yum install -y java-17-amazon-corretto-devel wget -y</p>
      <p>mkdir -p /opt/nexus/</p>
      <p>mkdir -p /tmp/nexus/</p>
      <p>cd /tmp/nexus/</p>
      <p>NEXUSURL="https://download.sonatype.com/nexus/3/latest-unix.tar.gz"</p>
      <p>wget $NEXUSURL -O nexus.tar.gz</p>
      <p>sleep 10</p>
      <p>EXTOUT=`tar xzvf nexus.tar.gz`</p>
      <p>NEXUSDIR=`echo $EXTOUT | cut -d '/' -f1`</p>
      <p>sleep 5</p>
      <p>rm -rf /tmp/nexus/nexus.tar.gz</p>
      <p>cp -r /tmp/nexus/* /opt/nexus/</p>
      <p>sleep 5</p>
      <p>useradd nexus</p>
      <p>chown -R nexus.nexus /opt/nexus</p>
      <p>cat &lt;&lt;EOT&gt;&gt; /etc/systemd/system/nexus.service</p>
      <p>[Unit]</p>
      <p>Description=nexus service</p>
      <p>After=network.target</p>
      <p>[Service]</p>
      <p>Type=forking</p>
      <p>LimitNOFILE=65536</p>
      <p>ExecStart=/opt/nexus/$NEXUSDIR/bin/nexus start</p>
      <p>ExecStop=/opt/nexus/$NEXUSDIR/bin/nexus stop</p>
      <p>User=nexus</p>
      <p>Restart=on-abort</p>
      <p>[Install]</p>
      <p>WantedBy=multi-user.target</p>
      <p>EOT</p>
      <p>echo 'run_as_user="nexus"' &gt; /opt/nexus/$NEXUSDIR/bin/nexus.rc</p>
      <p>systemctl daemon-reload</p>
      <p>systemctl start nexus</p>
      <p>systemctl enable nexus</p>
    </div>


          </div>
        )
        }
          
          
      ],
    },


    {
      title: "Kubernetes Scripts",
      items: [
        { name: "Pod Management", content: "# Kubernetes pod management script" },
        { name: "Service Deployment", content: "# Kubernetes service deployment script" },
      ],
    },
    {
      title: "Ansible Automation Packages",
      items: [
        { name: "Ansible Master Package ", content: (
          <div>
            <div>
              <h2> I have created this package to automate and reduce the speed of ansible master setup</h2>
            </div>
            <br/>
<h1>package Name = ansible-master-setup</h1>
<br/>
<p>link - https://pypi.org/project/ansible-master-setup/</p>
<br/>
<h1>Ansible Controller setup package </h1>
<br/>
<p>Ansible Controller is a Python package designed to simplify and automate the installation, configuration, and management of an Ansible Master Node. It streamlines the setup process, enabling users to quickly configure Ansible’s master node for seamless automation and management of target machines.</p>

<p>This package ensures that the complex steps involved in setting up an Ansible environment are automated, saving time and reducing the potential for configuration errors. With Ansible Controller, you can set up an Ansible Master Node, configure inventory groups, manage users, and establish secure connections to target machines with minimal effort.</p>

<h2>Key Features:</h2>

<ul>
  <li><p><strong>Automated Ansible Master Node Setup:</strong> Install and configure Ansible on the master node with a simple set of commands.</p></li>
  <li><p><strong>Secure SSH Communication:</strong> Automatically manage SSH keys for secure communication between the master node and target machines.</p></li>
  <li><p><strong>Customizable Configuration:</strong> Easily configure new users, target machine details, and inventory groups.</p></li>
  <li><p><strong>Seamless Integration:</strong> Integrate with existing Ansible workflows and inventories, reducing the overhead of manual configuration.</p></li>
  <li><p><strong>Easy-to-Use Command-Line Interface:</strong> The package provides an intuitive CLI to guide you through each setup step.</p></li>
</ul>
<br/>
<h2>Installation</h2>
<br/>
<p>To install the package, run:</p>
<br/>

{/* <pre><code>pip install git+https://github.com/mohammdnoorain/Devops/blob/main/Ansible-controller-updated.txt</code></pre> */}

<h2>Ansible Controller Master Node Configuration and Installation</h2>

<p>The Ansible Controller package is designed to simplify the setup and configuration of an Ansible master node, enabling you to efficiently manage and automate configurations on target machines. This package automates key tasks required to configure and manage your target nodes seamlessly.</p>

<h3>Installation and Setup Instructions:</h3>

<h4>Step 1: Switch to Root User</h4>
<p>To ensure proper installation permissions, begin by switching to the root user:</p>
<pre><code>sudo -i</code></pre>

<h4>Step 2: Update Package Manager</h4>
<p>Next, update your package manager to ensure all dependencies are up-to-date:</p>
<pre><code>sudo apt update</code></pre>

<h4>Step 3: Install python3-pip</h4>
<p>To manage Python packages, install pip, the Python package installer:</p>
<pre><code>sudo apt install python3-pip</code></pre>

<h4>Step 4: Install the Ansible Controller Package</h4>
<p>Once pip is installed, use it to install the ansible-controller package:</p>
<pre><code>pip install ansible-controller</code></pre>

<h4>Step 5: Run the Package</h4>
<p>After installation, run the package by simply executing the following command:</p>
<pre><code>ansible_controller</code></pre>

<h4>Step 6: Provide New User Details</h4>
<p>You'll be prompted to enter the name of the new user that will be created on your machine. This user will be used to manage and interact with the target machine(s).</p>

<h4>Step 7: Define Inventory Group</h4>
<p>Next, provide a name for the inventory group. This group will help categorize and manage your target machines. You can choose any group name you prefer.</p>

<h4>Step 8: Specify Target Machine Name</h4>
<p>You will then be asked to provide the name of the target machine you want to configure. This can be any name you'd like.</p>

<h4>Step 9: Enter Private IP of the Target Machine</h4>
<p>Provide the private IP address of the target machine to establish a connection between the controller and the node.</p>

<h4>Step 10: Provide Target Machine Username</h4>
<p>Enter the username of the target machine. This is the username that the controller will use to authenticate and configure the target machine.</p>

<h4>Step 11: Save the Public Key</h4>
<p>Finally, the package will provide a public key that you need to save. This key will be used when running the Ansible target machine setup package to allow secure communication between your master node and the target nodes.</p>

<h2>Conclusion</h2>

<p>The Ansible Controller package streamlines the configuration process for managing your infrastructure with Ansible. By following the steps outlined above, you will have a fully configured Ansible master node ready to automate tasks across your network of target machines. Use this package to enhance productivity and simplify Ansible node management for your IT infrastructure.</p>




          </div>
        
        
        
        
        
        ) },
        { name: "Ansible Target machine Package", content: (
          
          <div>
            <h1>Ansible Target Node Setup Package</h1>
            <div>
              <h2> I have created this package to automate and reduce the speed of ansible target machine setup</h2>
            </div>
            <br/>
<h1>package Name = ansible-targetnode-setup</h1>  <br/>
<br/>
<p>link - https://pypi.org/project/ansible-targetnode-setup/</p>
         
          


<br/>
<h3>Ansible Target Machine</h3>
<br/>

<p>Ansible Target Machine is a Python package designed to automate the setup of an Ansible target node. It simplifies the configuration of remote systems by handling user creation, SSH key authentication, and inventory setup, making it easier for Ansible Master Nodes to manage multiple machines effortlessly.</p>

<p>This package ensures that target machines are correctly configured to accept commands from an Ansible Controller, reducing manual setup effort and streamlining infrastructure automation.</p>

<br/>
<h3>Installation</h3>
<br/>

{/* <pre><code>pip install git+https://github.com/mohammdnoorain/Devops/blob/main/Ansible-TargetNode-Updated-code.txt</code></pre> */}

<br/>
<h2>Ansible Target Machine Setup</h2>
<br/>

<p>Ansible Target Machine Setup is a Python package designed to automate the configuration of a target machine to work with an Ansible master node. This package simplifies the process of setting up SSH keys, user creation, and inventory grouping for seamless Ansible automation.</p>

<br/>
<h3>Features</h3>
<br/>

<ul>
  <li>✅ Automates target machine setup for Ansible control</li>
  <li>✅ Creates a dedicated user for Ansible communication</li>
  <li>✅ Generates and saves public-private key pairs for secure SSH connections</li>
  <li>✅ Supports inventory grouping for better infrastructure management</li>
  <li>✅ Simplifies the onboarding of new target machines</li>
</ul>

<br/>
<h3>Installation & Setup Instructions</h3>
<br/>

<p>Follow these steps to install and configure the Ansible Target Machine Setup package on your target machine.</p>

<br/>
<h4>Step 1: Switch to Root User</h4>
<br/>
<pre><code>sudo -i</code></pre>

<br/>
<h4>Step 2: Update the Package Manager</h4>
<br/>
<p>Ensure your system has the latest package updates:</p>
<pre><code>sudo apt update</code></pre>

<br/>
<h4>Step 3: Install Python and Pip</h4>
<br/>
<pre><code>sudo apt install python3-pip -y</code></pre>

<br/>
<h4>Step 4: Install the Package</h4>
<br/>
<p>Use pip to install the Ansible Target Machine Setup package:</p>
<pre><code>pip install ansible-targetnode-setup</code></pre>

<br/>
<h4>Step 5: Run the Package</h4>
<br/>
<p>Once installed, execute the setup command:</p>
<pre><code>ansible_targetnode_setup</code></pre>

<br/>
<h4>Step 6: Paste the Public Key of Ansible Master Node</h4>
<br/>
<p>Use the saved public key from the Ansible master node. If you forgot it, retrieve it using:</p>
<pre><code>cat .ssh/id_ecdsa.pub</code></pre>
<p>Run this command on your Ansible master VM under the user directory.</p>







          </div>






        ) 
        },
      ],
    },
    {
      title: "Docker",
      items: [
        { name: "Image Build", content: "# Docker image build script" },
        { name: "Container Management", content: "# Docker container management script" },
      ],
    },
    {
      title: "AWS Scripts",
      items: [
        { name: "S3 Bucket Management", content: "# AWS S3 bucket management script" },
        { name: "EC2 Instance Setup", content: "# AWS EC2 instance setup script" },
      ],
    },
    {
      title: "Monitoring Tools",
      items: [
        { name: "Prometheus Alerts", content: "# Prometheus alert configuration" },
        { name: "Grafana Dashboards", content: "# Grafana dashboard setup script" },
      ],
    },
  ];

  const handleBoxClick = (index) => {
    setActiveBox(activeBox === index ? null : index);
    setSelectedItem(null);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (

    <>
      <div className="py-6 max-w-[1200px] mx-auto" id="work">
        <div className="mx-auto px-4 md:px-8">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl lg:text-3xl text-white">
                My <span>DevOps Contribution</span>
              </h2>

              <p className="text-gray-500">
                These are my latest contribution  for devops community like:- packages,scripts,etc....
              </p>
            </div>
          </div>

             <ImageSlider/>


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {boxes.map((box, index) => (
              <div
                key={index}
                className="p-4 bg-gray-800 text-white rounded-lg shadow-lg cursor-pointer"
                onClick={() => handleBoxClick(index)}
              >
                <h3 className="text-xl font-semibold">{box.title}</h3>

                {activeBox === index && (
                  <ul className="mt-4 space-y-2">
                    {box.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="p-2 bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-600"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleItemClick(item);
                        }}
                      >
                        {item.name}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {selectedItem && (
            <div className="mt-8 p-6 bg-white rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-4">{selectedItem.name}</h4>
              <pre className="bg-gray-100 p-4 rounded-lg overflow-auto">
                <code>{selectedItem.content}</code>
              </pre>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default WorkDevops;