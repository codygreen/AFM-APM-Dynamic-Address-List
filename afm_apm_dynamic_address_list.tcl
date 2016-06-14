#
# AFM/ASM dynamic address list iRulesLX RPC.
#

# add the address to the address list
when ACCESS_POLICY_COMPLETED {
	set ilx_handle [ILX::init "afm_apm_dynamic_address_list_plugin" "dynamic_address_list"] 
	# set username
    set ip_address [ACCESS::session data get session.user.clientip] 
    if {[info exists ip_address]} {
	    # create a random secret
	    if {[catch {[ILX::call $ilx_handle "addAddress" $ip_address]} result]} {
	        log local0.error "Client - [IP::client_addr], ILX failure: $result"
	        return
	    }
    } else {
    	log local0.error "Can not add address list, client IP not defined"
    	return
    }
}

# remove the address from the address list
when ACCESS_SESSION_CLOSED {
	set ilx_handle [ILX::init "afm_apm_dynamic_address_list_plugin" "dynamic_address_list"] 
	# set username
    set ip_address [ACCESS::session data get session.user.clientip] 
    if {[info exists ip_address]} {
	    # create a random secret
	    if {[catch {[ILX::call $ilx_handle "deleteAddress" $ip_address]} result]} {
	        log local0.error "Client - $ip_address, ILX failure: $result"
	        return
	    }
    } else {
    	log local0.error "Can not delete address list, client IP not defined"
    	return
    }
}