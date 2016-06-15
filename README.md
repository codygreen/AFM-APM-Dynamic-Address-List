# AFM/APM Dynamic Firewall Rules

iRules LX code to dynamically update an AFM address list based upon APM sessions.  The code will add a user's IP address to an AFM address list once an APM access policy is completed and will remove the IP address when the access session is closed. Requires TMOS version 12.1 and APM/AFM licensing.

<a href="http://www.youtube.com/watch?feature=player_embedded&v=Wh_gINQLqQw
" target="_blank"><img src="http://img.youtube.com/vi/Wh_gINQLqQw/0.jpg" 
alt="IMAGE ALT TEXT HERE" width="240" height="180" border="10" /></a>

### Installation 
You'll need to create a iRules LX workspace and plugin - details can be found in the DevCentral [Getting Started with iRules LX series] (https://devcentral.f5.com/articles/sid/6964)

Note: If you want to keep things simple then using the following naming convention:

* Workspace: dynamic_address_list_workspace
* Plugin: dynamic_address_list_plugin
* Extension: dynamic_address_list

Once the workspace is created you'll need to make the following code changes:

1. Update the iRule ILX::init with the name of your plugin and your extension (if you didn't follow the naming convention)

   ```set ilx_handle [ILX::init "plugin_name" "extension_name"]```

2. SSH into your BIG-IP and nstall the node modules 
   ```
cd /var/ilx/workspaces/Common/dynamic_address_list_workspace/extensions/dynamic_address_list/
npm install node--rest-client winston --save
```
3. Add the iRule to you APM Virtual Server
